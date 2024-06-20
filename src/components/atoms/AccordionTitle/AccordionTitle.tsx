import * as React from 'react';
import { AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import COLORS from '@/styles/colors';
import SIZES from '@/styles/sizes';
import { SvgIconComponent } from '@mui/icons-material';

// AccordionTitleProps 타입 정의
export type AccordionTitleProps = {
    AccordionTitle: string;
    Icon: SvgIconComponent;
};

// 커스텀 스타일을 적용한 ExpandMoreIcon
const CustomExpandMoreIcon = styled(ExpandMoreIcon)({
    fontSize: SIZES.FONT_SIZE.EXTRA_EXTRA_LARGE,
    transition: 'color 0.3s',
    color: COLORS.TEXT.ghtjr00,
});

// 커스텀 스타일을 적용한 AccordionSummary
const StyledAccordionSummary = styled(AccordionSummary)({
    borderBottom: 0,
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s',
    
    padding: '10px 20px', // padding을 조정하여 칸이 커지는 문제 해결
    '&:hover': {
        backgroundColor: 'transparent', // hover 시 배경색
        color: COLORS.TEXT.ghtjr01, // hover 시 텍스트 색상
        '& .MuiSvgIcon-root': {
            color: COLORS.TEXT.ghtjr01, // 아이콘 색상 변경
        },
        '& .MuiTypography-root': {
            color: COLORS.TEXT.ghtjr01, // 텍스트 색상 변경
            transition: 'none',
        },
    },
});

// AccordionTitle 컴포넌트 정의
const AccordionTitle: React.FC<AccordionTitleProps> = ({ AccordionTitle, Icon }) => {
    return (
        <StyledAccordionSummary
            expandIcon={<CustomExpandMoreIcon/>}
            aria-controls="Sales-content"
            id="Sales-header"
        >
            <Icon style={{  marginRight: SIZES.SPACING.SMALL, fontSize: SIZES.FONT_SIZE.EXTRA_EXTRA_LARGE }} />
            <Typography sx={{ fontSize: SIZES.FONT_SIZE.EXTRA_LARGE }}>
                {AccordionTitle}
            </Typography>
        </StyledAccordionSummary>
    );
};

// AccordionTitle 컴포넌트 내보내기
export default AccordionTitle;