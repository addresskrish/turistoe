const Navbar = () => {
  return (
    <section className="px-[219px] mx-auto py-[46px] flex items-center justify-between">
        <h1 className="text-3xl font-bold text-neutral-50">Turistoe</h1>
        <ul className="text-neutral-50 flex items-center justify-center space-x-[60px] font-normal border rounded-full py-3 px-[30px] text-[14px]">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Trip</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Reviews</li>
        </ul>
    </section>
  )
}

export default Navbar
