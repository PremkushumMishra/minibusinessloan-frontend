
import axios from "axios";
import API_CONFIG from "../config";

export const fetchUserDetails = async (token, { navigate, skipNavigate = false } = {}) => {
    const steps = [
        "mobile-verification",
        "name-email-verify",
        "kyc-process",
        "additional-info",
        "co-applicant",
        "applicant-business-details",
        "bank-statement",
        "bsa-success",
        "cam-process",
        "abhinandan",
        "esign-page",
    ];

    try {
        const response = await axios.get(
            `${API_CONFIG.BASE_URL}/get/user/details/web`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log("User Details API Response:", response.data);
// if response.data.data.loanApplicationStatus is 7 or 8 navigate to cam-process
if (response.data.data.loanApplicationStatus === 7 || response.data.data.loanApplicationStatus === 8) {
    // if (navigate && typeof navigate === "function" && !skipNavigate) {
        navigate("/cam-process");
        return;
    // }
}

        if (!localStorage.getItem("user_step")) {
            const nextStep = steps[response.data.data.loanApplicationStatus];
            localStorage.setItem("user_step", nextStep);
            if (navigate && typeof navigate === "function" && !skipNavigate) {
                navigate(`/${nextStep}`);
            }
        } else if (response.data?.data?.loanApplicationStatus !== undefined) {
            const nextStep = steps[response.data.data.loanApplicationStatus];
            if (navigate && typeof navigate === "function" && !skipNavigate) {
                navigate(`/${nextStep}`);
            }
        }
        return response.data.data;
    } catch (err) {
        console.error("User Details API Error:", err);
        throw err;
    }
};