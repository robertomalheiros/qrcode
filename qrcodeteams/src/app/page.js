"use client"

import Image from "next/image";
import { useState } from 'react';
import QRCode from 'qrcode.react';



export default function Home() {

  const [link, setLink] = useState('');
  const [qrCode, setQrCode] = useState(null);

  const generateQRCode = () => {
    setQrCode(link);
  };


  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 justify-between p-24">

      <div className="min-h-screen bg-gray-100 py-6 gap-4 flex flex-col items-center justify-center sm:py-12">

					<h1 className="text-2xl font-semibold">GERADOR QR CODE </h1>
    
          <h1>2ª VARA SSJ VCA</h1>
		<p></p>
		<p></p>
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">

		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
        <div>
					<h2 className="text-2xl font-semibold">Crie seu QR Code</h2>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
            <input autoComplete="off" id="link" name="link" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="link" onChange={(e) => setLink(e.target.value)}/>							
            <label htmlFor="link" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Cole seu link</label>
						</div>
						<div className="relative flex flex-col items-center">
            <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={generateQRCode}>Gerar</button>
						</div>
            {qrCode && <div className="mt-10 flex flex-col items-center"><QRCode value={qrCode} /></div>}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </main>
  );
}
