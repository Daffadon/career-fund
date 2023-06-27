import { listposisi } from './program';
import { listProgram } from './program';
import { school } from '../account/account';
import { fontType } from '../../components/Text/text';
import CheckBox from '../../components/CheckBox/CheckBox';

const FilterProgram = ({ setIsShowMenu }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50">
      <div className="absolute top-0 left-0 h-full w-80 bg-white z-50">
        <div className="flex flex-col justify-between w-full h-full bg-white rounded-r-xl px-4 py-6">
          <div className="flex justify-between">
            <p className={`${fontType['h3']}`}>Filter</p>
            <button onClick={() => setIsShowMenu(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className={`${fontType['h3']} mt-5`}>Posisi</p>
          <CheckBox item={listposisi} />
          <p className={`${fontType['h3']} mt-5`}>Jurusan</p>
          <CheckBox item={listProgram} />
          <p className={`${fontType['h3']} mt-5`}>Tingkat</p>
          <CheckBox item={['D3', 'S1']} />
          <p className={`${fontType['h3']} mt-5`}>Pendidikan Terakhir</p>
          <CheckBox item={school} />
        </div>
      </div>
    </div>
  );
};

export default FilterProgram;
