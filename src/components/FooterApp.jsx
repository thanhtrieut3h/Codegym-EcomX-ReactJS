import { Layout } from "antd";

const { Footer: AntFooter} = Layout;

const FooterApp = () => {
    return (
        <AntFooter className="text-center bolder-t">
            Shop Luxury @{new Date().getFullYear()} Created with CodeGym
        </AntFooter>
    )
}
export default FooterApp