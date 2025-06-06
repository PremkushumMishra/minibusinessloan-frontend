import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    Linking,
  } from 'react-native';
  
  import React, {useEffect, useState, useRef} from 'react';
  import ScreenWrapper from '../../../library/wrapper/ScreenWrapper';
  import ChildScreensHeader from '../../../components/MainComponents/ChildScreensHeader';
  import R from '../../../resources/R';
  import Button from '../../../library/commons/Button';
  import UserApi from '../../../datalib/services/user.api';
  import {useDispatch, useSelector} from 'react-redux';
  import {currentUserSelector} from '../../../store/slices/user/user.slice';
  import Loader from '../../../library/commons/Loader';
  import {CommonActions, useNavigation} from '@react-navigation/native';
  import ScreensNameEnum from '../../../constants/ScreensNameEnum';
  import {
    fetchApprovedCams,
    getUserDetails,
  } from '../../../store/actions/userActions';
  import {WebView} from 'react-native-webview'; // ✅ Added WebView
  import BusinessApi from '../../../datalib/services/business.api';
  import EsignSuccessModal from '../../../library/modals/EsignSuccessModal';
  
  const SanctionLetter = ({route}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const {approvedLoanAmount, Tenure, ROI, accountNumber, customerID, borrower} =
      route?.params;
    const [data, setData] = useState({});
    //   const [document_id, setDocuemntId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [kycURL, setKycURL] = useState(null); // ✅ New State
    const intervalRef = useRef(null);
    console.log('      route?.params;', route?.params);
    useEffect(() => {
      if (approvedLoanAmount) {
        const repaymentAmount =
          (parseInt(approvedLoanAmount) * 20) / 100 +
          parseInt(approvedLoanAmount);
        const processingFee =
          (((parseInt(approvedLoanAmount) * 10) / 100) * 18) / 100 +
          (parseInt(approvedLoanAmount) * 10) / 100;
  
        const EMI = (repaymentAmount / parseInt(Tenure))?.toFixed(0);
  
        const netDisbursement = parseInt(approvedLoanAmount) - processingFee;
  
        setData({
          repaymentAmount,
          processingFee,
          EMI,
          netDisbursement,
        });
      }
    }, [approvedLoanAmount]);
  
    //   useEffect(() => {
    //     if (customerID && document_id && !intervalRef.current) {
    //       intervalRef.current = setInterval(checkSanctionStatus, 30000);
    //     }
  
    //     return () => {
    //       if (intervalRef.current) {
    //         console.log('Clearing interval in cleanup');
    //         clearInterval(intervalRef.current);
    //         intervalRef.current = null;
    //       }
    //     };
    //   }, [customerID, document_id]);
  
    const checkSanctionStatus = async () => {
      try {
        const response = await new UserApi().checkSanctionStatus({customerID});
        console.log('STEP 4', response);
        if (response.sanctionLetterURL != null) {
          // if (intervalRef.current) {
          //   clearInterval(intervalRef.current);
          //   intervalRef.current = null;
          // }
          await dispatch(getUserDetails());
          setModalVisible(true);
          // ✅ Navigation history reset karte hue OTP_SCREEN par navigate karo
  
          // navigation.navigate(ScreensNameEnum.DISBURSE_SCREEN, {
          //   ...route?.params,
          //   ...data,
          // });
  
          // Alert.alert('E-Sign Completed', 'User Completed the E-Sign process');
        }
      } catch (error) {
        console.log('Error fetching BSA status:', error);
      }
    };
    const processSanction = async () => {
      try {
        setLoading(true);
        const res = await new BusinessApi().processSanctionLetter({customerID});
        console.log('STEP 3', res);
        if (res?.status) {
          checkSanctionStatus();
        }
        setLoading(false);
      } catch (error) {
        console.log('Error', error);
        setLoading(false);
      }
    };
  
    const handleContinue = async () => {
      try {
        setLoading(true);
        const payload = {
          customerID: customerID,
          callbackUrl: 'https://www.google.com', // https://103.104.73.167:8012/100days/dist/pages/sanctionLetterPush?customerID=${customerID},
          //Additional Fields
          amountApplied: approvedLoanAmount,
          tenure: Tenure,
          repaymentAmount: data?.repaymentAmount,
          interestRate: ROI,
          processingFee: data?.processingFee,
          emi: data?.EMI,
          netDisbursement: data?.netDisbursement,
        };
        const response = await new UserApi().previewSanction(payload);
        if (response?.signUrl) {
          // setDocuemntId(response?.document_id);
          setKycURL(response?.signUrl);
        }
        setLoading(false);
      } catch (error) {
        console.log('Error during preview sanction letter', error);
        setLoading(false);
      }
    };
  
    return (
      <ScreenWrapper header={false} backDisabled>
        <ChildScreensHeader screenName="Loan Sanction Details" />
        <ScrollView contentContainerStyle={styles.container}>
          {kycURL ? (
            <View style={{flex: 1}}>
              <WebView
                source={{uri: kycURL}}
                style={{flex: 1}}
                startInLoadingState={true}
                javaScriptEnabled
                domStorageEnabled
                onNavigationStateChange={async state => {
                  if (state.url.includes('https://www.google.com')) {
                    setKycURL(null);
                    processSanction();
                    console.log('HELLO STEP !');
                    //   checkSanctionStatus()
                  }
                }}
              />
            </View>
          ) : (
            <View style={styles.card}>
              <Text style={styles.subheading}>
                Please review and sign the loan agreement below
              </Text>
  
              <View style={styles.detailsContainer}>
                <DetailRow label="Loan Amount" value={₹${approvedLoanAmount}} />
                <DetailRow
                  label="Tenure"
                  value={Tenure == '14' ? ${Tenure} Weeks : ${Tenure} Days}
                />
                <DetailRow
                  label="Repayment Amount"
                  value={data?.repaymentAmount}
                />
                <DetailRow
                  label={`Installmet (${Tenure === '14' ? Weekly : Daily}) `}
                  value={₹${data?.EMI}}
                />
  
                <DetailRow label="Interest Rate" value={ROI} />
                <DetailRow label="Processing Fee" value={data?.processingFee} />
                <DetailRow
                  label="Net Disbursment Amount"
                  value={data?.netDisbursement}
                />
              </View>
  
              <View style={styles.noteBox}>
                <Text style={styles.noteText}>
                  • The loan amount will be disbursed to customer's bank account
                  ending with{' '}
                  {accountNumber?.slice(-5) ? accountNumber?.slice(-5) : 'N/A'}
                </Text>
                <Text style={styles.noteText}>
                  • Late payment charges will be applicable for delayed payments
                </Text>
              </View>
              <Button
                title="E-Sign Using Aadhar OTP "
                buttonStyle={styles.button}
                onPress={handleContinue}
              />
            </View>
          )}
          {/* {isEsignLinkSend && (
            <View style={styles.overlay}>
              <View style={styles.overlayContent}>
                <Text style={styles.overlayTitle}>E-Sign Request Sent</Text>
                <Text style={styles.overlayMessage}>
                  Please do not go back or refresh this screen. An email has been
                  sent to {borrower} registered email address to complete the
                  E-Sign of the Sanction Letter.
                </Text>
                <ActivityIndicator size="large" color={R.colors.primary} />
  
              </View>
            </View>
          )} */}
        </ScrollView>
        {loading && <Loader loading={loading} />}
        {modalVisible && (
          <EsignSuccessModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        )}
      </ScreenWrapper>
    );
  };
  
  const DetailRow = ({label, value}) => (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
  
  export default SanctionLetter;
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: R.colors.background,
      flexGrow: 1,
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#E6EAE6',
      borderRadius: 16,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1A2B1F',
      textAlign: 'center',
      marginBottom: 8,
    },
    subheading: {
      fontSize: 14,
      color: '#555',
      textAlign: 'center',
      marginBottom: 20,
    },
    detailsContainer: {
      marginBottom: 16,
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 6,
    },
    detailLabel: {
      fontSize: 14,
      color: '#333',
    },
    detailValue: {
      fontSize: 14,
      fontWeight: '600',
      color: '#000',
    },
    noteBox: {
      backgroundColor: '#C9D1C9',
      borderRadius: 8,
      padding: 12,
      marginBottom: 20,
    },
    noteText: {
      fontSize: R.fontSize.M,
      color: '#333',
      marginBottom: 4,
      fontWeight: '800',
    },
    button: {
      backgroundColor: '#1A2B1F',
      borderRadius: 10,
      paddingVertical: 12,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    },
  
    overlayContent: {
      backgroundColor: '#fff',
      padding: 24,
      marginHorizontal: 20,
      borderRadius: 12,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 10,
    },
  
    overlayTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1A2B1F',
      marginBottom: 12,
      textAlign: 'center',
    },
  
    overlayMessage: {
      fontSize: 14,
      color: '#333',
      textAlign: 'center',
      marginBottom: 20,
      lineHeight: 22,
    },
  
    spinner: {
      width: 40,
      height: 40,
      borderWidth: 4,
      borderColor: '#ccc',
      borderTopColor: '#1A2B1F',
      borderRadius: 20,
      animation: 'spin 1s linear infinite',
    },
  });