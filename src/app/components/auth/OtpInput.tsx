import { login } from "@/app/store/slices/authSlice";
import { setToken } from "@/app/utils/auth";
import BasicProvider from "@/app/utils/basicprovider";
import setNotification from "@/app/utils/notification";
import { usePathname, useRouter } from "next/navigation";
import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { useDispatch } from "react-redux";

interface OTPInputProps {
  data: any;
  length?: number;
  setIsverify?: any;
}

const OTPInput: React.FC<OTPInputProps> = ({
  data,
  length = 4,
  setIsverify = () => {},
}) => {
  // hooks
  const dispatch = useDispatch();
  const router = useRouter();
  // state
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const [timer, setTimer] = useState<number>(60);
  const [canResend, setCanResend] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const pathname = usePathname();

  // Create array of refs using Array.from
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = Array(length).fill(null);
  }, [length]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer, canResend]);

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      handleSubmit();
    }
  }, [otp]);

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    // Take only the last character if multiple characters are pasted
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value !== "" && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.key === "Backspace" &&
      index > 0 &&
      otp[index] === "" &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = async (): Promise<any> => {
    try {
      setTimer(60);
      setCanResend(false);
      setOtp(Array(length).fill(""));
      setIsSubmitting(false);
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
      const response: any = await new BasicProvider(
        "auth/customer/resend-otp"
      ).postRequest({ email: data.email });

      setNotification({ type: "success", message: response.message });
    } catch (error: any) {
      console.error("ERROR", error);

      setNotification({ type: "error", message: error.message });
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (otp.join("").length === length && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const response: any = await new BasicProvider(
          "auth/customer/verify"
        ).postRequest({ otp: otp.join(""), email: data.email });
        const user = response?.data?.user;
        if (pathname !== "/forgot-password") {
          dispatch(
            login({
              user: {
                _id: user._id,
                mobile: user.mobile,
                name: user.name,
                email: user.email,
                role: user?.role,
                image: user?.featured_image || "",
              },
            })
          );
          setToken(response?.access_token);
          setNotification({
            type: "success",
            message: "Varification Successfull",
          });
          router.push("/");
        } else {
          setIsverify(true);
        }
      } catch (error: any) {
        setNotification({ type: "error", message: error.message });
        setOtp(Array(length).fill(""));
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
        console.error("OTP submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  useEffect(() => {
    if (otp.length === 0) {
      handleSubmit();
    }
  }, [otp]);

  //   console.log("-=--=-=-=pathname", pathname);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-2 text-mutedColor">Enter OTP</h2>
      <p className="text-center mb-6 text-mutedColor">
        We’ve sent a verification code to your registered email address.
      </p>
      {/* OTP Input Fields */}

      <div className="flex gap-2 sm:gap-4 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              if (el) {
                inputRefs.current[index] = el;
              }
            }}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            disabled={isSubmitting}
            className={`w-12 text-mutedColor h-12 sm:w-14 sm:h-14 text-2xl text-center border-2 rounded-lg 
              ${
                isSubmitting
                  ? "bg-gray-100 cursor-not-allowed"
                  : "focus:border-darkColor focus:ring-2 focus:ring-darkColor"
              } 
              outline-none transition-all`}
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>

      {/* Submission Status */}
      {isSubmitting && (
        <div className="text-blue-600 font-medium mb-4">Verifying OTP...</div>
      )}

      {/* Timer and Resend Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {canResend ? (
          <p className="text-gray-600">
            Resend OTP in {Math.floor(timer / 60)}:
            {(timer % 60).toString().padStart(2, "0")}
          </p>
        ) : (
          <button
            onClick={handleResend}
            disabled={isSubmitting}
            // className={` p-2 border border-darkColor rounded-lg bg-lightColor text-darkColor font-bold hover:text-mutedColor
            className={`text-darkColor font-bold hover:text-mutedColor 
                            ${
                              isSubmitting
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
            type="button"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default OTPInput;
