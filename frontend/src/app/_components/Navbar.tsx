import { Logo } from "@/components/Icons";
import utils from "@/utils";
import { Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BrowserIcon, DashboardSquare02Icon, InvoiceIcon } from "hugeicons-react"
import { WalletOption } from "./WalletOptions";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

export function Navbar({ className, ...props }: Props) {
    const LogoBrand = () => {
        return (
            <Flex alignItems={"center"} padding={"4"}>
                <Logo />
                <Flex direction={"column"} >
                    <Heading size="md">
                        {utils.constants.APP_NAME}
                    </Heading>
                    <Text fontSize={"xs"} color={"fg.subtle"}>
                        {"Dynamic Invoice Platform"}
                    </Text>
                </Flex>
            </Flex>
        )
    }
    const Navbar = () => {
        const items = [
            { label: "Home", href: "/", icon: <BrowserIcon /> },
            { label: "Dashboard", href: "/dashboard", icon: < DashboardSquare02Icon /> },
        ]
        const NavItem = ({ label, icon, href }: { label: string, href: string, icon: React.ReactNode }) => {
            return (
                <Flex
                    alignItems={"center"}
                    gap={"4"}
                    {...props}
                >
                    <Center width={"12"} height={"12"} borderRadius={"full"} bg={"bg.emphasized"} color={"white"}>
                        {icon}
                    </Center>
                    <Link href={href} fontSize={"sm"} fontWeight={"medium"}>
                        {label}
                    </Link>
                </Flex >
            )
        }

        return (
            <Flex
                height={"fit-content"}
                alignItems={"center"}
                padding={"2"}
                rounded={"full"}
                gap={"4"}
                backgroundColor={"#161616/95"}
                backdropFilter={"blur(32px)"}
                borderTopWidth={"1px"}
                borderTopColor={"ActiveBorder/25"}
            >
                {items.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </Flex>
        )
    }

    const WalletConnect = () => {
        return (
            <WalletOption />
        )
    }
    return (
        <Flex
            width={"full"}
            justify={"space-between"}
            alignItems={"center"}
            position={'sticky'}
            zIndex={"sticky"}
        >
            <Flex width={"64"} justifyContent={"left"}>
                <LogoBrand />
            </Flex>
            <Navbar />
            <Flex width={"64"} justifyContent={"right"}>
                <WalletConnect />
            </Flex>
        </Flex>
    )
}