import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>안녕하세요!</h1>
        <h2>Fill in the form below to join!</h2>
      </div>
      <form>
        <div>
          <input type='text' placeholder='Username' required />
          <span>Input error</span>
        </div>
        <button>Create account</button>
      </form>
      <div />
      <div>
        <Link href='/sms'>
          <span></span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
