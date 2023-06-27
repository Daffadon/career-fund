import checkEmail from '../../assets/SignUp-Login/Hands Point.svg';
import { fontType } from '../Text/text';
import { EMAIL_REGEX } from '../../constants/regex';
import exit from '../../assets/icons/exit.svg';
import { sendEmailRecovery } from '../../api/api';
import { useState } from 'react';
import Loading from '../Loading/Loading';
const ForgetPassword = ({ setIsShow, setIsSentRec, email, setEmail }) => {
  const [loading, setLoading] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    if (email.match(EMAIL_REGEX)) {
      try {
        setLoading(true);
        const response = await sendEmailRecovery(email);
        setIsShow(false);
        setIsSentRec(true);
      } catch (error) {
        // console.log(error)
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
        <div className="bg-white rounded-2xl w-[22rem] sm:w-[26rem] py-10 flex flex-col">
          <img
            src={exit}
            className="w-5 self-end mr-10 cursor-pointer"
            onClick={() => {
              setIsShow(false);
            }}
          />
          <div className="flex justify-center items-center flex-col gap-4">
            <img src={checkEmail} className="w-8/12" />
            <p className={`${fontType['h3']} sm:text-4xl`}>Lupa Kata Sandi</p>
            <p className={`${fontType['p1']} text-neutral50 text-center w-8/12 sm:w-7/12`}>
              Jangan khawatir ini terjadi. Masukkan email Anda yang tersambung dengan Akunmu
            </p>
            <label htmlFor="email" className={`${fontType['h4']}  self-start ml-14`}>
              Email
            </label>
            <input
              className="rounded-full border-none bg-[#F9F9F9] w-9/12 "
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              type="submit"
              className={`${fontType['button']} w-9/12 bg-primary50 text-white py-2 px-4 rounded-full text-center cursor-pointer`}>
              Kirim
            </button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </form>
  );
};

export default ForgetPassword;
