import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='my-auto flex flex-col items-center gap-2 *:font-medium *:text-white'>
        <span className='text-9xl'>🥕</span>
        <h1 className='text-4xl'>당근</h1>
        <h2 className='text-2xl'>당근 마켓에 어서 오세요!</h2>
      </div>
      <div className='flex flex-col items-center gap-3 w-full'>
        <Link
          href='/create-account'
          className='w-full bg-orange-500 text-lg font-medium py-2.5 rounded-md text-center text-white hover:bg-orange-400 transition-colors'
        >
          시작하기
        </Link>
        <div>
          <span className='text-white'>이미 계정이 있나요?</span>
          <Link className='hover:underline' href='/login'>
            로그인
          </Link>
        </div>
      </div>
    </main>
  );
}
