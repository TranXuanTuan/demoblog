import React from 'react'
import { Flex, Link } from "@chakra-ui/core";

const datas = [
    { url: '/', name: 'Home'},
    { url: '/about', name:'About'},
    {url: '/contact', name:'Contact'}
]

export default function Menu() {
    const NavLink = ({ children, ...props }) => (
        <Link px={5} color="white" {...props}>
            {children}
        </Link>
    );
    return (
        <Flex
            bg="black"
            w="100%"
            px={4}
            py={4}
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex flexDirection="row" justifyContent="center" alignItems="center">
                    {datas.map((data, i) => {
                        return(
                            <NavLink key={`menu-${i}`}>{data.name}</NavLink>
                        )
                    })}          
            </Flex>
            <Flex>
                <NavLink color="white">Login</NavLink>
            </Flex>
            
        </Flex>
    )
}
