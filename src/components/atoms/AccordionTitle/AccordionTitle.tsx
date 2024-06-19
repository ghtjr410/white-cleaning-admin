// React 및 MUI(Material-UI) 컴포넌트와 스타일 관련 파일들 import
import * as React from 'react';  // React 라이브러리 전체를 가져옴
import {AccordionSummary, Typography,} from '@mui/material';  // MUI의 AccordionSummary 및 Typography 컴포넌트 가져오기
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';  // MUI의 ExpandMore 아이콘 컴포넌트 가져오기

// 프로젝트 내 스타일 관련 상수 파일들 import
import COLORS from "@/styles/colors";  // 색상 관련 상수들 가져오기
import SIZES from "@/styles/sizes";  // 크기 관련 상수들 가져오기
import {SvgIconComponent} from "@mui/icons-material";  // MUI의 SvgIconComponent 타입 가져오기

// AccordionTitleProps 타입 정의
export type AccordionTitleProps = {
    AccordionTitle: string; // 아코디언 타이틀 문자열
    Icon: SvgIconComponent; // 아코디언 타이틀 아이콘 컴포넌트
}

// AccordionTitle 컴포넌트 정의
const AccordionTitle = ({AccordionTitle, Icon}: AccordionTitleProps) => {
    return (
        <AccordionSummary
            // 아코디언 확장 아이콘 설정
            expandIcon={<ExpandMoreIcon style={{
                fontSize: SIZES.FONT_SIZE.EXTRA_EXTRA_LARGE,
                color: COLORS.TEXT.PRIMARY}}/>} // < 아래방향부분
                
            aria-controls="Sales-content"   // 아리아 컨트롤 속성
            
            id="Sales-header" // 아이디 속성
            sx={{
                borderBottom: 1,  // 하단 테두리
                borderColor: COLORS.BORDER.PRIMARY,  // 테두리 색상
                display: "flex",  // Flexbox 레이아웃
                alignItems: "center",  // 아이템 중앙 정렬
                transition: "all 0.3s",   // 모든 속성 전환에 0.3초 설정
                '&:hover': {
                    backgroundColor: COLORS.SECONDARY, // 호버 시 배경색 변경
                },
                //todo 확장되면 글씨 커지도록 (TODO: 확장 시 글씨 크기 변경 기능 추가 예정)
            }}
        >
            {/* 아이콘 컴포넌트 렌더링, 오른쪽 여백 및 크기 설정 */}
            <Icon style={{marginRight: SIZES.SPACING.SMALL, fontSize: SIZES.FONT_SIZE.EXTRA_EXTRA_LARGE}}/>
            {/* 타이틀 텍스트 렌더링, 폰트 크기 설정 */}
            <Typography sx={{fontSize: SIZES.FONT_SIZE.EXTRA_LARGE}}>
                {AccordionTitle}</Typography>
        </AccordionSummary>
    );
}
// AccordionTitle 컴포넌트 내보내기
export default AccordionTitle;