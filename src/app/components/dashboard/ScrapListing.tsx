import ScrapProductCard from "../card/ScrapProductCard"

const ScrapListing = () => {

    return (<>
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
  {[1, 3, 4, 5, 7, 8, 9, 9,9].map((_, index) => (
    <ScrapProductCard key={index} />
  ))}
</div>


        </div>

    </>)
}

export default ScrapListing