import BreadCrumb from "./BreadCrumb";

const BreadCrumb = (): JSX.Element => {
    return (
        <div>
            <BreadCrumb category={product.category} crumb={product.title} />
            <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
                <figure className="flex-shrink-0 rounded-2x1 overflow-hidden px-4 py-4 bg-white view_image">
                    <img src={product.image} alt={product.title} className="object-contain w-full h-72" />
                </figure>
                <div className="card-body px-1 lg:px-12">
                    <h2 className="card-title">
                        {product.title}
                        <span className="badge badge-accent ml-2">NEW</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}
