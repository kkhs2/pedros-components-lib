import { ProductCard } from '../ProductCard'

export function ProductList({products}) {
  
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-2">
          { 
            products.map(p => {
              return <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none max-w-sm shadow-lg mx-auto text-center h-full">
                  <ProductCard key={p.midascode} product={p} />
                </div>
              </div>
            })
          }
          </div>
        </div>
      </>
    )
}