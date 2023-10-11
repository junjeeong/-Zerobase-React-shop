import { Category } from "../constants/category";

type BreadCrumb = {
  category?: string
  crumb?: string
} & typeof defaultProps

const defaultProps = {
  category: '',
  crumb : ''
}

const BreadCrumb = ({ category, crumb }: BreadCrumb): JSX.Element => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>{!!Category[category] ? Category[category] : category}</li>
        <li>{crumb}</li>
      </ul>
      </div>
    )
}

BreadCrumb.defaultProps = defaultProps

export default BreadCrumb
