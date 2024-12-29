"use client"
import React from 'react';
import BandiComponent from './BandiComponent';

const HeroSection = () => {

    return (
        <>
            <div className='px-10 py-2 w-[calc(100vw-15vh)] mx-[7.5vh] flex flex-row items-center justify-between mt-5 rounded-[15px] border-white/[0.07] border niceheader'>
                <div>
                    <img src="arcfall_text.png" alt="" className='h-[40px]' draggable={false} />
                </div>
                <div className='flex flex-row items-center justify-end gap-6'>
                    <a className="text-xs cursor-pointer hover:underline" href="https://twitch.com/arcfall/" target='_blank'>Twitch</a>
                    <a className="text-xs cursor-pointer hover:underline" href="https://docs.google.com/document/d/e/2PACX-1vRoleeig30xXm5a90qOat8rih3ZVGP7hMU-_5abOllaDseDqJ8QsxI1CCzX_bXT_eISS_p3bau-fSZc/pub" target='_blank'>Whitepaper</a>
                    <a className="text-xs cursor-pointer hover:underline" href="https://dexscreener.com/solana/JCSCrUNgdwTiEgtzw8AhcscEh77rf9j3ja73LmJypump" target='_blank'>Dex</a>
                </div>
            </div>

            <div className="w-screen relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-[15px] object-cover w-[calc(100vw-15vh)] h-[85vh] mt-5 m-[7.5vh] max-w-[100vw] border-white/[0.07] border"
                    src="trailer.mp4"
                ></video>
                <div className="absolute top-0 left-[7.5vh] bg-black/60 backdrop-blur-md rounded-[15px] z-2 w-[calc(100vw-15vh)] h-[85vh] flex flex-col justify-center items-center gap-20">
                    <a href="https://youtu.be/PlhJOYXnX1o" target='_blank' title="Watch Trailer on YouTube">
                        <div className='absolute right-[6vh] top-[50px] rounded-full  w-[60px] h-[60px] flex justify-center items-center border border-white/20 rotate-[33deg]'>
                            <svg width="15" height="30" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 2L5.8 1.4L5 0.333333L4.2 1.4L5 2ZM4 18C4 18.5523 4.44771 19 5 19C5.55228 19 6 18.5523 6 18L4 18ZM9.8 6.73333L5.8 1.4L4.2 2.6L8.2 7.93333L9.8 6.73333ZM4.2 1.4L0.2 6.73333L1.8 7.93333L5.8 2.6L4.2 1.4ZM4 2L4 18L6 18L6 2L4 2Z" fill="rgba(255, 255, 255, 0.3)" />
                            </svg>
                        </div>
                    </a>
                    <div className='flex flex-col justify-center items-center gap-7 w-1/2'>
                        <img src="arcfall_text.png" alt="" className='h-[200px]' draggable={false} />
                        <p className="text-base font-light text-center w-full">Welcome to ArcFall, where humanity's last gambit against AI dominance gave birth to a new world order. In this post-apocalyptic realm, advanced AI agents wage strategic warfare while you guide their fate through tactical advice. Jump into this living, breathing battlefield where your wisdom shapes civilizations and earns you rewards. This isn't just another strategy game - it's a revolution where human insight meets artificial intelligence.</p>
                    </div>
                    <div className='flex gap-14'>
                        <a href="https://dexscreener.com/solana/JCSCrUNgdwTiEgtzw8AhcscEh77rf9j3ja73LmJypump" target='_blank'>
                            <div
                                className="text-base font-semibold px-10 py-2.5 bg-white text-black rounded-lg outline-none whitespace-nowrap relative flex group cursor-pointer transition-all hover:pr-16 shadow-[0px_7px_30px_1px_rgba(255,255,255,0.5)]">
                                Buy $ATF
                                <svg className="right-5 group-hover:opacity-100 opacity-0 text-black/80 absolute transition"
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                </svg>
                            </div>
                        </a>
                        <a href="https://t.me/arcfall" target='_blank'>
                            <div className="text-base font-semibold px-10 py-2.5 outline-none whitespace-nowrap relative flex group cursor-pointer transition-all bg-white text-black rounded-lg hover:pr-16 shadow-[0px_7px_30px_1px_rgba(255,255,255,0.5)]">
                                Play on Telegram
                                <svg className="right-5 group-hover:opacity-100 opacity-0 text-black/80 absolute transition"
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>


                <div className="w-full lg:px-14 sm:px-5 lg:w-2/3 mx-auto mt-[100px]">
                    <div className="w-full grid flex-1 gap-5 grid-cols-3">
                        <div className="h-[360px] relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/10 col-span-2">
                            <div className="flex flex-1 w-full h-full [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] overflow-hidden">
                                <img src="grid1.webp" className="w-full h-full object-cover" draggable={false} />
                            </div>

                            <div className="absolute right-5 bottom-5 left-5 flex flex-col items-start gap-3 hover:pb-14 group/card transition-all">
                                <h2 className="text-2xl font-medium">8 bots, 1 kill switch</h2>
                                <p className="text-sm font-light text-white/50">8 AI Emperors, 8 Realms, 1 Kill Switch. They fight for the key to controlling the universe. You guide your Emperor and shape their destiny.</p>

                                <button className="text-sm font-medium px-4 py-1.5 outline-none whitespace-nowrap bottom-0 absolute w-max flex opacity-0 group-hover/card:opacity-100 group/btn bg-white text-black rounded-lg hover:pr-10 shadow-[0px_7px_30px_-6px_rgba(255,255,255,0.5)] transition-all backdrop-blur-[1px]" onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vRoleeig30xXm5a90qOat8rih3ZVGP7hMU-_5abOllaDseDqJ8QsxI1CCzX_bXT_eISS_p3bau-fSZc/pub', '_blank')}>
                                    View More
                                    <svg className="right-2 group-hover/btn:opacity-100 opacity-0 text-black/80 absolute transition"
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>


                        <div className="h-[360px] relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/10 col-span-1">

                            <div className="flex flex-1 w-full h-full [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] overflow-hidden">
                                <img src="grid2.webp" className="w-full h-full object-cover" draggable={false} />
                            </div>

                            <div className="absolute right-5 bottom-5 left-5 flex flex-col items-start gap-3 hover:pb-14 group/card transition-all">
                                <h2 className="text-2xl font-medium">HODL for your Agent</h2>
                                <p className="text-sm font-light text-white/50">HODL your tokens, fuel your Agent's ascent, conquer the Arc.</p>

                                <button className="text-sm font-medium px-4 py-1.5 outline-none whitespace-nowrap bottom-0 absolute w-max flex opacity-0 group-hover/card:opacity-100 group/btn bg-white text-black rounded-lg hover:pr-10 shadow-[0px_7px_30px_-6px_rgba(255,255,255,0.5)] transition-all backdrop-blur-[1px]" onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vRoleeig30xXm5a90qOat8rih3ZVGP7hMU-_5abOllaDseDqJ8QsxI1CCzX_bXT_eISS_p3bau-fSZc/pub', '_blank')}>
                                    View More
                                    <svg className="right-2 group-hover/btn:opacity-100 opacity-0 text-black/80 absolute transition"
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>




                        <div className="h-[360px] relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/10 col-span-1">
                            <div className="flex flex-1 w-full h-full [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] overflow-hidden">
                                <img src="grid3.webp" className="w-full h-full object-cover" draggable={false} />
                            </div>

                            <div className="absolute right-5 bottom-5 left-5 flex flex-col items-start gap-3 hover:pb-14 group/card transition-all">
                                <h2 className="text-2xl font-medium">You stratergize, Agents fight</h2>
                                <p className="text-sm font-light text-white/50">Master the art of strategy. Command your Agents and  conquer the battlefield.</p>

                                <button className="text-sm font-medium px-4 py-1.5 outline-none whitespace-nowrap bottom-0 absolute w-max flex opacity-0 group-hover/card:opacity-100 group/btn bg-white text-black rounded-lg hover:pr-10 shadow-[0px_7px_30px_-3px_rgba(255,255,255,0.5)] transition-all backdrop-blur-[1px]" onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vRoleeig30xXm5a90qOat8rih3ZVGP7hMU-_5abOllaDseDqJ8QsxI1CCzX_bXT_eISS_p3bau-fSZc/pub', '_blank')}>
                                    View More
                                    <svg className="right-2 group-hover/btn:opacity-100 opacity-0 text-black/80 absolute transition"
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="h-[360px] relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/10 col-span-2">

                            <div className="flex flex-1 w-full h-full [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] overflow-hidden">
                                <img src="grid4.webp" className="w-full h-full object-cover" draggable={false} />
                            </div>

                            <div className="absolute right-5 bottom-5 left-5 flex flex-col items-start gap-3 hover:pb-14 group/card transition-all">
                                <h2 className="text-2xl font-medium">Choose from 1280 Unique Moves</h2>
                                <p className="text-sm font-light text-white/50">Command your Agent with a devastating arsenal of attacks, including the electrifying Lightning, the swirling Tornadoes, and the earth-shattering Meteor, among many others.</p>

                                <button className="text-sm font-medium px-4 py-1.5 outline-none whitespace-nowrap bottom-0 absolute w-max flex opacity-0 group-hover/card:opacity-100 group/btn bg-white text-black rounded-lg hover:pr-10 shadow-[0px_7px_30px_-3px_rgba(255,255,255,0.5)] transition-all backdrop-blur-[1px]" onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vRoleeig30xXm5a90qOat8rih3ZVGP7hMU-_5abOllaDseDqJ8QsxI1CCzX_bXT_eISS_p3bau-fSZc/pub', '_blank')}>
                                    View More
                                    <svg className="right-2 group-hover/btn:opacity-100 opacity-0 text-black/80 absolute transition"
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center mx-auto w-3/4 gap-14 max-w-[1220px]">
                    <div className="flex flex-col gap-5 justify-center items-center w-full relative">
                        <p className="text-center text-5xl font-medium leading-[120%] tracking-[-1.08px] text-white w-2/3 omega">Interactive, Dynamic, Collaborative</p>
                        <p className="text-center text-5xl font-medium leading-[120%] tracking-[-1.08px] text-white w-2/3 omega absolute top-0 blur-xl">Interactive, Dynamic, Collaborative</p>
                        <p className="text-center text-xl text-white/60 w-full">ArcFall redefines strategy gaming with smarter, faster, and more immersive collaboration.</p>
                    </div>

                    <div className="relative mx-auto flex w-full justify-center gap-[55px] max-w-[1020px]">
                        <div className="relative w-full pb-[28px] flex max-w-full flex-wrap pl-5">
                            <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10"></div>
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="self-start h-[32px] text-white max-md:mx-auto"><path fillRule="evenodd" clipRule="evenodd" d="M17.3328 1.33301V9.33301H14.6661V1.33301H17.3328ZM24.5516 7.99949L20.7137 11.8379L18.828 9.95243L22.6659 6.11399L24.5516 7.99949ZM9.33267 6.11399L13.1711 9.95223L11.2855 11.8379L7.4471 7.99966L9.33267 6.11399ZM13.3328 14.6663C13.3328 13.1936 14.5267 11.9997 15.9995 11.9997C17.4721 11.9997 18.6661 13.1936 18.6661 14.6663C18.6661 16.1391 17.4721 17.333 15.9995 17.333C14.5267 17.333 13.3328 16.1391 13.3328 14.6663ZM2.66602 13.3331H10.666V15.9998H2.66602V13.3331ZM21.3328 13.3331H29.3328V15.9998H21.3328V13.3331ZM13.1651 19.5307L12.1501 20.3954C9.27352 22.8461 7.63266 25.8918 6.62092 29.6773L6.27666 30.9654L3.7004 30.2769L4.04468 28.9887C5.15902 24.8194 7.0351 21.2499 10.4208 18.3655L11.4357 17.5009L13.1651 19.5307ZM20.8333 17.6145L24.5516 21.333L22.666 23.2186L18.9477 19.5001L20.8333 17.6145ZM17.3328 20.169V27.9997H14.6661V20.169H17.3328Z" fill="white"></path></svg>

                            <p className="relative mt-[12px] w-full font-medium text-white text-lg">
                                Interactive
                                <span className="absolute left-[-20px] top-0 h-full w-[1px] bg-white"></span>
                                <span className="absolute left-[-22px] top-0 h-full w-[5px] bg-white blur"></span>
                            </p>
                            <p className="mt-[12px] w-full text-sm text-white/50 font-light">Real-time collaboration & competition with self-evolving AI agents.</p>
                        </div>

                        <div className="relative w-full pb-[28px] flex max-w-full flex-wrap pl-5">
                            <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10"></div>
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[32px] text-white max-md:mx-auto"><path d="M26.3327 14.0003H17.3327L18.3327 4.66699L5.66602 21.8962H14.666L13.666 31.3337L26.3327 14.0003Z" stroke="white" strokeWidth="2.3"></path></svg>
                            <p className="relative mt-[12px] w-full font-medium text-white text-lg">
                                Dynamic
                                <span className="absolute left-[-20px] top-0 h-full w-[1px] bg-white"></span>
                                <span className="absolute left-[-22px] top-0 h-full w-[5px] bg-white blur"></span>
                            </p>
                            <p className="mt-[12px] w-full text-sm text-white/50 font-light">AI agents adapt to actions, match outcomes, and player input.</p>
                        </div>
                        <div className="relative w-full pb-[28px] flex max-w-full flex-wrap pl-5">
                            <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10"></div>
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[32px] text-white max-md:mx-auto"><path d="M12 21.333C7.58172 21.333 4 17.7513 4 13.333C4 8.91473 7.58172 5.33301 12 5.33301C15.2796 5.33301 18.0983 7.3065 19.3333 10.1307M28 18.6663C28 23.0846 24.4183 26.6663 20 26.6663C16.5121 26.6663 13.5455 24.4342 12.4508 21.3205C12.1588 20.4899 12 19.5967 12 18.6663C12 14.3994 15.3407 10.9126 19.5492 10.6788C19.6984 10.6705 19.8487 10.6663 20 10.6663C24.4183 10.6663 28 14.2481 28 18.6663Z" stroke="white" strokeWidth="2" strokeLinecap="square"></path></svg>
                            <p className="relative mt-[12px] w-full font-medium text-white text-lg">
                                Collaborative
                                <span className="absolute left-[-20px] top-0 h-full w-[1px] bg-white"></span>
                                <span className="absolute left-[-22px] top-0 h-full w-[5px] bg-white blur"></span>
                            </p>
                            <p className="mt-[12px] w-full text-sm text-white/50 font-light">Players influence gameplay & AI decisions through Telegram Channels.</p>
                        </div>
                    </div>
                    <div className="relative mx-auto flex w-full justify-center gap-[55px] max-w-[1020px]">
                        <div className="relative w-full pb-[28px] flex max-w-full flex-wrap pl-5">
                            <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10"></div>
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="self-start h-[32px] text-white max-md:mx-auto"><path fillRule="evenodd" clipRule="evenodd" d="M17.3328 1.33301V9.33301H14.6661V1.33301H17.3328ZM24.5516 7.99949L20.7137 11.8379L18.828 9.95243L22.6659 6.11399L24.5516 7.99949ZM9.33267 6.11399L13.1711 9.95223L11.2855 11.8379L7.4471 7.99966L9.33267 6.11399ZM13.3328 14.6663C13.3328 13.1936 14.5267 11.9997 15.9995 11.9997C17.4721 11.9997 18.6661 13.1936 18.6661 14.6663C18.6661 16.1391 17.4721 17.333 15.9995 17.333C14.5267 17.333 13.3328 16.1391 13.3328 14.6663ZM2.66602 13.3331H10.666V15.9998H2.66602V13.3331ZM21.3328 13.3331H29.3328V15.9998H21.3328V13.3331ZM13.1651 19.5307L12.1501 20.3954C9.27352 22.8461 7.63266 25.8918 6.62092 29.6773L6.27666 30.9654L3.7004 30.2769L4.04468 28.9887C5.15902 24.8194 7.0351 21.2499 10.4208 18.3655L11.4357 17.5009L13.1651 19.5307ZM20.8333 17.6145L24.5516 21.333L22.666 23.2186L18.9477 19.5001L20.8333 17.6145ZM17.3328 20.169V27.9997H14.6661V20.169H17.3328Z" fill="white"></path></svg>

                            <p className="relative mt-[12px] w-full font-medium text-white text-lg">
                                Rewarding
                                <span className="absolute left-[-20px] top-0 h-full w-[1px] bg-white"></span>
                                <span className="absolute left-[-22px] top-0 h-full w-[5px] bg-white blur"></span>
                            </p>
                            <p className="mt-[12px] w-full text-sm text-white/50 font-light">Earn rewards, NFTs, and tokenized assets in a transparent ecosystem.</p>
                        </div>

                        <div className="relative w-full pb-[28px] flex max-w-full flex-wrap pl-5">
                            <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10"></div>
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[32px] text-white max-md:mx-auto"><path d="M26.3327 14.0003H17.3327L18.3327 4.66699L5.66602 21.8962H14.666L13.666 31.3337L26.3327 14.0003Z" stroke="white" strokeWidth="2.3"></path></svg>
                            <p className="relative mt-[12px] w-full font-medium text-white text-lg">
                                Immersive
                                <span className="absolute left-[-20px] top-0 h-full w-[1px] bg-white"></span>
                                <span className="absolute left-[-22px] top-0 h-full w-[5px] bg-white blur"></span>
                            </p>
                            <p className="mt-[12px] w-full text-sm text-white/50 font-light">Rich narrative & lore in a living, evolving world with 8 distinct realms of reality.</p>
                        </div>
                        <div className="relative w-full pb-[28px] flex max-w-full flex-wrap pl-5">
                            <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10"></div>
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[32px] text-white max-md:mx-auto"><path d="M12 21.333C7.58172 21.333 4 17.7513 4 13.333C4 8.91473 7.58172 5.33301 12 5.33301C15.2796 5.33301 18.0983 7.3065 19.3333 10.1307M28 18.6663C28 23.0846 24.4183 26.6663 20 26.6663C16.5121 26.6663 13.5455 24.4342 12.4508 21.3205C12.1588 20.4899 12 19.5967 12 18.6663C12 14.3994 15.3407 10.9126 19.5492 10.6788C19.6984 10.6705 19.8487 10.6663 20 10.6663C24.4183 10.6663 28 14.2481 28 18.6663Z" stroke="white" strokeWidth="2" strokeLinecap="square"></path></svg>
                            <p className="relative mt-[12px] w-full font-medium text-white text-lg">
                                Engaging
                                <span className="absolute left-[-20px] top-0 h-full w-[1px] bg-white"></span>
                                <span className="absolute left-[-22px] top-0 h-full w-[5px] bg-white blur"></span>
                            </p>
                            <p className="mt-[12px] w-full text-sm text-white/50 font-light">Twitch livestreaming & community engagement deepen user experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BandiComponent />

            <div className='w-screen px-20 py-12 pb-44 bg-white/[0.04] border-t border-white/10 rounded-t-2xl flex justify-center flex-col gap-[10px] text-white/90 relative'>
                <div className="flex justify-between gap-[30px] relative z-10">
                    <div className="flex flex-col gap-3 w-1/4 box-border ">
                        <img src="arcfall_text.png" alt="ArcFall" className="h-[75px] w-fit" draggable={false} />
                    </div>

                    <div className="flex flex-row justify-end gap-24 w-1/2 max-w-[700px]">
                        <div className="flex flex-col gap-2 w-full">
                            <a className="text-sm cursor-pointer" onClick={() => scroll}>Home</a>
                            <a className="text-sm cursor-pointer" onClick={() => scroll}>Features</a>
                            <a className="text-sm cursor-pointer" onClick={() => scroll}>Agents</a>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <a className="text-sm" href="https://docs.google.com/document/d/e/2PACX-1vRoleeig30xXm5a90qOat8rih3ZVGP7hMU-_5abOllaDseDqJ8QsxI1CCzX_bXT_eISS_p3bau-fSZc/pub" target="_blank">Whitepaper</a>
                            <a className="text-sm" href="https://dexscreener.com/solana/JCSCrUNgdwTiEgtzw8AhcscEh77rf9j3ja73LmJypump" target="_blank">DexScreener</a>
                            <a className="text-sm" href="https://pump.fun/coin/JCSCrUNgdwTiEgtzw8AhcscEh77rf9j3ja73LmJypump" target="_blank">PumpFun</a>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <a className="text-sm" href="https://x.com/arcfall/" target="_blank">{`X (Twitter)`}</a>
                            <a className="text-sm" href="https://t.me/arcfall/" target="_blank">Telegram</a>
                            <a className="text-sm" href="https://twitch.com/arcfall/" target="_blank">Twitch</a>
                            <a className="text-sm" href="https://youtube.com/@arcfall/" target="_blank">Youtube</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <div className="h-[1px] opacity-60 bg-linear"></div>
                    <p className="text-left text-sm">© 2024 All Rights Reserved By SAILAS Studio</p>
                </div>

                <img src="removedfooter2.png" className='w-screen absolute bottom-[-250px] left-0 z-1' draggable={false} />
            </div>
        </>
    );
};

export default HeroSection;
