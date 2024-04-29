import { useState } from 'react'

export function ProductInfo() {
  const [shopCount, setShopCount] = useState(0)
  const shopClick = () => {
    return setShopCount(shopCount + 1)
  }

  const Title = () => {
    return (
    <div className="p-4">
      <div className="uppercase tracking-wide text-sm text-[#2356AA] font-semibold">[TITLE] SEASONAL PROMOTION BANNER
      </div>
    </div>
    )
  }
  
  const MainImg = () => {
    return <img src="//www.insidehook.com/wp-content/uploads/2021/07/cokezero-h.jpg?fit=1200%2C800" alt="Coca Cola Zero Sugar" />
  } 
  
  function MainText({count}) {
    return (
      <div className="p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas massa sit amet mi rutrum, a hendrerit ante pulvinar. Vivamus id risus a lorem consequat lobortis a id purus. Maecenas ac dui vulputate, posuere arcu ut, aliquet arcu. Fusce mollis lacinia ipsum sed facilisis. {count}
      </div>
    )
  }
  
  function ShopButton({handle}) {
    return (
      <div className="p-4">
        <button type="button" className="booker hover:bg-blue-700 text-white font-bold py-2 px-4 rounded booker" onClick={handle}>Shop Now</button>
      </div>
    )
  }

  return (
    <>
    <MainImg />
    <Title />
    <MainText count={shopCount} />
    <ShopButton handle={shopClick}/>
    </>
  )
}