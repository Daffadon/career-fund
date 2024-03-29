import { fontType } from '../../components/Text/text';
import BootcampCarousel from '../../container/Program/BootcampCarousel';
import filter from '../../assets/icons/filter.svg';
import CheckBox from '../../components/CheckBox/CheckBox';
import { listposisi } from '../../container/Program/program';
import { listProgram } from '../../container/Program/program';
import { school } from '../../container/account/account';
import { useState, useEffect } from 'react';
import FilterProgram from '../../container/Program/FilterProgram';
import ProgramCarouselContainer from '../../container/Program/ProgramCarouselContainer';
import Layout from '../../components/Layout/Layout';
import { getProgram } from '../../api/api';
import Loading from '../../components/Loading/Loading';
import { listCompany } from '../../container/LandingPage/Section4/listCompany';
const Program = () => {
  const [data, setData] = useState(listCompany);
  const [posisi, setPosisi] = useState({});
  const [jurusan, setJurusan] = useState({});
  const [tingkat, setTingkat] = useState({});
  const [pendidikan, setPendidikan] = useState({});
  const [filtering, setFiltering] = useState({
    posisi: {},
    jurusan: {},
    tingkat: {},
    pendidikan: {}
  });
  const [width, setWidth] = useState(window.innerWidth);
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    setFiltering((prev) => ({ ...prev, posisi: posisi }));
  }, [posisi]);

  useEffect(() => {
    setFiltering((prev) => ({ ...prev, jurusan: jurusan }));
  }, [jurusan]);

  useEffect(() => {
    setFiltering((prev) => ({ ...prev, tingkat: tingkat }));
  }, [tingkat]);

  useEffect(() => {
    setFiltering((prev) => ({ ...prev, pendidikan: pendidikan }));
  }, [pendidikan]);

  // useEffect(() => {
  //   const getContentProgram = async () => {
  //     try {
  //       const response = await getProgram();
  //       setData(response);
  //     } catch (error) {}
  //   };
  //   getContentProgram();
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      <BootcampCarousel />
      {width <= 1024 ? (
        <>
          <div
            className="ml-7 my-5 h-10 w-10 bg-primary50 rounded-full cursor-pointer"
            onClick={() => setIsShowMenu(true)}>
            <img src={filter} className="w-10" />
          </div>
          {isShowMenu && <FilterProgram setIsShowMenu={setIsShowMenu} />}
        </>
      ) : (
        <div className="relative mt-16 flex px-10 h-max mb-20">
          <div className="w-[20rem]">
            <div className="flex flex-col justify-between w-11/12 bg-white rounded-2xl px-4 py-6">
              <div className="flex justify-between">
                <p className={`${fontType['h3']}`}>Filter</p>
                <img src={filter} className="w-6" />
              </div>
              <p className={`${fontType['h3']} mt-5`}>Posisi</p>
              <CheckBox item={listposisi} checked={posisi} setChecked={setPosisi} />
              <p className={`${fontType['h3']} mt-5`}>Jurusan</p>
              <CheckBox item={listProgram} checked={jurusan} setChecked={setJurusan} />
              <p className={`${fontType['h3']} mt-5`}>Tingkat</p>
              <CheckBox item={['D3', 'S1']} checked={tingkat} setChecked={setTingkat} />
              <p className={`${fontType['h3']} mt-5`}>Pendidikan Terakhir</p>
              <CheckBox item={school} checked={pendidikan} setChecked={setPendidikan} />
            </div>
          </div>
          <div className="w-full rounded-2xl">
            {data ? <ProgramCarouselContainer listProgram={data} /> : <Loading />}
          </div>
        </div>
      )}
      <div className="w-full rounded-2xl lg:hidden">
        {data ? <ProgramCarouselContainer listProgram={data} /> : <Loading />}
      </div>
    </Layout>
  );
};

export default Program;
