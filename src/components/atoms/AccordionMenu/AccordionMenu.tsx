// AccordionMenu.tsx

import * as React from 'react';
import { AccordionDetails, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useRouter } from "next/router";
import SIZES from "@/styles/sizes";
import COLORS from "@/styles/colors";
import { styled } from '@mui/system';

// 각 메뉴 아이템의 타입 정의
export type AccordionMenuItem = {
    name: string;
    url: string;
};

// AccordionMenu 컴포넌트의 props 타입 정의
export type AccordionMenuProps = {
    AccordionMenuItems: AccordionMenuItem[];
};

// 스타일드 컴포넌트 사용
const StyledAccordionDetails = styled(AccordionDetails)({
    padding: 0,
});

const StyledList = styled(List)({
    padding: 0,
});

const StyledListItem = styled(ListItem)({
    // borderBottom: '1px solid',
    // borderColor: 'divider',
    // transition: 'all 0.3s',
    backgroundColor: COLORS.ghtjr02,
    '&:hover': {
        // backgroundColor: COLORS.SECONDARY,
        
        color: COLORS.TEXT.ghtjr01,
    },
});

// AccordionMenu 컴포넌트 정의
const AccordionMenu: React.FC<AccordionMenuProps> = ({ AccordionMenuItems }) => {
    const router = useRouter();
    
    const moveToUrl = React.useCallback((url: string) => {
        router.push(`/${url}`);
    }, [router]);

    return (
        <StyledAccordionDetails>
            <StyledList>
                {AccordionMenuItems.map((value) => (
                    <StyledListItem
                        key={value.name}
                        onClick={() => moveToUrl(value.url)}
                    >
                        <ListItemButton>
                            <ListItemText 
                                primaryTypographyProps={{ fontSize: SIZES.FONT_SIZE.EXTRA_LARGE }}
                                primary={value.name}
                            />
                        </ListItemButton>
                    </StyledListItem>
                ))}
            </StyledList>
        </StyledAccordionDetails>
    );
};

export default AccordionMenu;