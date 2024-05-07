const NftMeme = () => {
  return (
    <main className='bg-nft nft_meme h-[1646px] w-full'>
      <section className='mx-auto h-[900px] w-[1200px]'></section>

      {/* section bottom */}
      <section className='mx-auto w-[1010px] pt-[156px]'>
        <div className='mx-auto w-[490px]'>
          <h2 className='text-center text-[60px] font-bold uppercase leading-[60px] text-[#FFB800]'>Clan MEME Dance</h2>
          <p className='mx-auto mt-[10px] w-[441px] text-center text-2xl font-bold leading-[25px] text-[#fff]'>
            Get your rewards sky-high by becoming an all-powerful memelord
          </p>
          <div className='mx-auto mt-[30px] flex w-[274px] items-center justify-between'>
            <span
              style={{
                textShadow: ' 1px 0px 0px #925908'
              }}
              className='text-2xl font-bold uppercase tracking-[1px] text-[#F3AE06]'
            >
              Explore Whitepaper
            </span>
            <svg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect x='0.401367' y='0.500488' width='24.9972' height='24.999' rx='5' fill='#FFB800' />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M18.399 17.1763C18.4103 17.7285 18.867 18.167 19.4191 18.1557C19.9713 18.1444 20.4097 17.6876 20.3984 17.1354L20.185 6.69361C20.174 6.15731 19.7419 5.72517 19.2057 5.7142L8.76506 5.5007C8.21292 5.48941 7.75617 5.92791 7.74488 6.48011C7.73359 7.03231 8.17204 7.48911 8.72417 7.5004L16.8193 7.66594L5.69425 18.7923C5.30374 19.1828 5.30374 19.816 5.69425 20.2066C6.08475 20.5971 6.71788 20.5971 7.10838 20.2066L18.2335 9.08023L18.399 17.1763Z'
                fill='white'
              />
            </svg>
          </div>
        </div>

        <section className='mt-10 grid grid-cols-4 gap-4'>
          <div className='bg-clan_dance item flex h-[240px] w-[243px] flex-col justify-center gap-[10px] rounded-3xl px-5 pt-[96px]'>
            <h2 className='text-center text-2xl'>Manage clan</h2>
            <p className='text-base font-normal leading-[22px] text-[#D6BFA9]'>
              Being a memelord, you’re in full control here: boss around until you’re out
            </p>
          </div>
          <div className='bg-clan_dance item flex h-[240px] w-[243px] flex-col justify-center gap-[10px] rounded-3xl px-5 pt-[96px]'>
            <h2 className='text-center text-2xl'>Entry Fee</h2>
            <p className='text-base font-normal leading-[22px] text-[#D6BFA9]'>
              Keep the feeble weaklings out by setting the entry requirements & fee
            </p>
          </div>
          <div className='bg-clan_dance item flex h-[240px] w-[243px] flex-col justify-center gap-[10px] rounded-3xl px-5 pt-[96px]'>
            <h2 className='text-center text-2xl'>Attack Clans</h2>
            <p className='text-base font-normal leading-[22px] text-[#D6BFA9]'>
              Your leadership shapes the world of gamefi: raid other clans to build up your treasury
            </p>
          </div>
          <div className='bg-clan_dance item flex h-[240px] w-[243px] flex-col justify-center gap-[10px] rounded-3xl px-5 pt-[96px]'>
            <h2 className='text-center text-2xl'>Claim Rewards</h2>
            <p className='text-base font-normal leading-[22px] text-[#D6BFA9]'>
              As a leader, you distribute rewards and take commission fees from winnings
            </p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default NftMeme
