import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export default function Sidebars() {
    return (
        <div>
            <Sidebar aria-label="Sidebar with logo branding example">
                <Sidebar.Logo
                    href="#"
                    img="/favicon.svg"
                    imgAlt="Flowbite logo"
                >
                    <p>
                        Flowbite
                    </p>
                </Sidebar.Logo>


                <Sidebar.Items>
                    <Sidebar.ItemGroup>

                        <Sidebar.Item href="#" icon={HiChartPie} ><p> Dashboard</p> </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards} ><p>Settings</p> </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiInbox} ><p>History</p> </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser} ><p> Feedback</p> </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag} ><p> Products</p> </Sidebar.Item>

                    </Sidebar.ItemGroup>

                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiUser} ><p> Profile</p> </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag} ><p> Logout</p> </Sidebar.Item>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>


        </div>
    )
}
