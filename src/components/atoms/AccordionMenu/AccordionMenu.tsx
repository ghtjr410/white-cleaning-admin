import * as React from 'react';
import {AccordionDetails, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {useRouter} from "next/router";
import SIZES from "@/styles/sizes";
import COLORS from "@/styles/colors";

// 각 메뉴 아이템의 타입 정의
export type AccordionMenuItem = {
    name: string; // 메뉴 이름
    url: string; // 메뉴 클릭시 이용할 URL
}

// AccordionMenu 컴포넌트의 props 타입 정의
export type AccordionMenuProps = {
    AccordionMenuItems: AccordionMenuItem[]; // 메뉴 아이템들의 배열
}

// AccordionMenu 컴포넌트 정의
const AccordionMenu = ({AccordionMenuItems}: AccordionMenuProps) => {
    const router = useRouter() // next.js의 useRouter 훅을 사용하여 라우터 객체를 얻음

    // URL로 이동하는 함수 정의
    const moveToUrl = (url: string) => router.push(`/${url}`)

    return (
        // 아코디언 세부 사항을 포함하는 컴포넌트
        <AccordionDetails sx={{padding: 0}}>
            {/* 메뉴 리스트를 랜더링 */}
            <List sx={{padding: 0}}>
                {AccordionMenuItems?.map((value, index) => (
                    // 각 메뉴 아이템을 리스트 아이템으로 랜더링
                    <ListItem key={value.name} // 고유 키 설정
                              onClick={() => moveToUrl(value.url)} // 클릭 시 URL로 이동
                              sx={{
                                  borderBottom: 1, // 하단 테두리 설정
                                  borderColor: 'divider',  // 테두리 색상 설정
                                  transition: "all 0.3s", // 모든 변화에 대해 0.3초간 전환
                                  '&:hover': {
                                      backgroundColor: COLORS.SECONDARY, // 호버 시 배경색 변경
                                  }
                              }}
                    >
                        {/* 버튼 형태의 리스트 아이템 */}
                        <ListItemButton>
                            {/* 텍스트 컴포넌트, 텍스트 크기 설정 */}
                            <ListItemText primaryTypographyProps={{fontSize: SIZES.FONT_SIZE.EXTRA_LARGE}}
                                          primary={value.name} // 메뉴 이름 설정
                                          /> 
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </AccordionDetails>
    );
}

// AccordionMenu 컴포넌트 내보내기
export default AccordionMenu;