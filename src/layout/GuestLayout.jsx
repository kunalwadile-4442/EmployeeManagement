import { App_url } from '../Utils/constants/Static';

export default function GuestLayout({ children }) {
    return (
<div
  className="flex items-center justify-start min-h-screen bg-cover bg-center p-6 lg:pl-[134px]"
  style={{
    backgroundImage: `url('${App_url?.loginRegister?.login_bg}')`,
  }}
>
  <div className="w-full max-w-md p-8 px-6 rounded-lg shadow-lg border border-[#8b8b8b]  backdrop-blur-lg">
  {children}
</div>
</div>



    
    
    );
}
