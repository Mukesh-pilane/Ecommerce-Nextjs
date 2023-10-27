import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { CgFacebook } from "react-icons/cg"
import Link from 'next/link'
import Image from "next/image"

const Footer = () => {
	return (
		<div className='bg-black w-full py-5 sm:block'>
			<div className='p-8 px-4 sm:px-10 md:px-20 lg:pl-24  lg:pr-28 relative mt-3 '>
				<div className='flex flex-wrap justify-between'>
					<div className='min-w-[50px]'>
						<Image
							width={200}
							height={200}
							alt='logo'
							src="/img/whitelogo.png" className="w-20" />
					</div>
					<div className='flex flex-col text-white'>
						<Link href={""} className="font-s_bold text-lg mb-4">AboutUS</Link>
						<Link href={""} className="text-sm mb-6">Our Heritage</Link>
						<Link href={""} className="text-sm mb-6">Our Company</Link>
						<Link href={""} className="text-sm mb-6">Coffee house</Link>
					</div>
					<div className='flex flex-col text-white'>
						<Link href={""} className="font-s_bold text-lg mb-4">Responsibility</Link>
						<Link href={""} className="text-sm mb-6">Community</Link>
						<Link href={""} className="text-sm mb-6">Ethical Sourcing</Link>
						<Link href={""} className="text-sm mb-6">Enviroment</Link>
						<Link href={""} className="text-sm mb-6">Diversity</Link>
					</div>
					<div className='flex flex-col text-white'>
						<Link href={""} className="font-s_bold text-lg mb-4">Quick Links</Link>
						<Link href={""} className="text-sm mb-6">Delivery</Link>
						<Link href={""} className="text-sm mb-6">Season's Gifting</Link>
						<Link href={""} className="text-sm mb-6">Carees</Link>
						<Link href={""} className="text-sm mb-6">Customer Service</Link>
						<Link href={""} className="text-sm mb-6">FAQs</Link>


					</div>
					<div className='flex flex-col text-white'>
						<Link href={""} className="font-s_bold text-lg mb-4">SOCIAL MEDIA</Link>
						<div className='flex gap-5 text-2xl'>
							<a href=''><BsInstagram /></a>
							<a href=''><CgFacebook /></a>
							<a href=''><BsTwitter /></a>
						</div>
					</div>
					<div className='flex flex-col gap-5'>
						
					</div>
				</div>

				<div className='border-t border-solid mt-7 text-gray-100 py-3 flex justify-between'>
					<div className='text-sm'>
						<Link href={""} className="pr-5 border-r">Web Accessiblity</Link>
						<Link href={""} className="pr-3 pl-3 border-r">Privacy Statement</Link>
						<Link href={""} className="pr-3 pl-3 border-r">Terms of Use</Link>
						<Link href={""} className="pr-3 pl-3">Contact Us</Link>
					</div>
					<p className='text-xs'>© 2023 Shoperz Company. All rights reserved.</p>
				</div>
			</div>

		</div>
	)
}

export default Footer