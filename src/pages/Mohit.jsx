import {Image, StyleSheet, Text, View, Pressable, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import R from '../../../resources/R';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import ScreensNameEnum from '../../../constants/ScreensNameEnum';
import {useSelector} from 'react-redux';
import {currentUserSelector} from '../../../store/slices/user/user.slice';
import UserApi from '../../../datalib/services/user.api';

const SignSanctionLetter = () => {
  const user = useSelector(currentUserSelector);
  const [data, setData] = useState({});
  console.log('data_', data);
  useEffect(() => {
    fetchDataOfUserLoanProposal();
  }, []);
  const fetchDataOfUserLoanProposal = async () => {
    const response = await new UserApi().fetchCutomerLoanProposal({
      customerID: user?.customerID,
    });
    console.log('response', response);
    if (response?.length >= 1) {
      setData(response[0]);
    }
  };
  const navigation = useNavigation();
  const handleApplyNow = () => {
    // Handle the apply action here
    navigation.navigate(ScreensNameEnum.SANCTION_LETTER_SCREEN, data);
  };

  return (
    <Pressable
      onPress={handleApplyNow}
      android_ripple={{
        color: R.colors.PRIMARY_LIGHT,
        borderless: false,
        radius: wp(50),
      }}
      style={({pressed}) => [
        styles.container,
        pressed && Platform.OS === 'ios' && styles.pressed,
      ]}
      accessible
      accessibilityLabel="Apply for business loan">
      <View style={styles.imgView}>
        <Image
          source={require('../../../assets/Images/MoneyBag.png')}
          style={styles.moneyBag}
          resizeMode="contain"
        />
      </View>
      <View style={styles.col}>
        <Text
          style={
            styles.title
          }>{अभिनंदन ! Loan application has been approved.}</Text>
        <Text style={styles.subTitle}>
          Proceed With E-Sign For Loan Disbursement
        </Text>
      </View>
      <View style={styles.iconView}>
        <Icon
          name="chevron-double-right"
          size={wp(7)}
          style={styles.icon}
          color={R.colors.PRIMARY}
        />
      </View>
    </Pressable>
  );
};

export default SignSanctionLetter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.background,
    height: hp(12),
    borderRadius: wp(50),
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    justifyContent: 'space-between',
    gap: wp(2),
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // important for ripple clipping
  },
  pressed: {
    opacity: 0.6, // iOS press feedback
  },
  imgView: {
    height: hp(6),
    width: hp(6),
    justifyContent: 'center',
    backgroundColor: '#2764B1',
    borderRadius: hp(3),
    alignItems: 'center',
    padding: wp(2),
  },
  moneyBag: {
    height: '100%',
    width: '100%',
  },
  col: {
    flex: 1,
    marginLeft: wp(1),
  },
  subTitle: {
    color: R.colors.PRIMARY_LIGHT,
    fontSize: wp(3.4),
  },
  title: {
    color: R.colors.PRIMARY_LIGHT,
    fontSize: wp(4.2),
    fontWeight: 'bold',
    marginTop: hp(0.5),
  },
  iconView: {
    height: hp(5.5),
    width: hp(5.5),
    justifyContent: 'center',
    backgroundColor: R.colors.PRIMARY_LIGHT,
    borderRadius: hp(3),
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});