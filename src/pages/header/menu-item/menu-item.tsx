import { Link } from "react-router-dom";
import "./menu-item.scss";

type Props = {
    to: string;
    caption: string;
}

const MenuItem = ({ to, caption }: Props) => {
    return <div className="menu-item">
        <Link to={to}>
            {caption}
        </Link>
    </div>
};

export { MenuItem };
