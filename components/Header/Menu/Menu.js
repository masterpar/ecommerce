import {Container, Menu as MenuWeb, Grid, Label, Icon} from "semantic-ui-react";
import Link from "next/link";


export const Menu = () => {
    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className='menu__left' width={6}>
                        <MenuPlataforms />
                    </Grid.Column>
                    <Grid.Column className='menu__right' width={10}>
                        <MenuOptions />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
};


const MenuPlataforms = () =>{
    return (
        <MenuWeb>
            <Link href='/play-station'>
                    <MenuWeb.Item as='a'>
                        Playstation
                    </MenuWeb.Item>
            </Link>
            <Link href='/ps5'>
                <MenuWeb.Item as='a'>
                    PS5
                </MenuWeb.Item>
            </Link>
            <Link href='/pc'>
                <MenuWeb.Item as='a'>
                    PC
                </MenuWeb.Item>
            </Link>
        </MenuWeb>
    )
}

const MenuOptions = () => {
    return (
        <MenuWeb>
            <MenuWeb.Item>
                <Icon name='user outline' />
                Mi Cuenta
            </MenuWeb.Item>
        </MenuWeb>

    )
}
