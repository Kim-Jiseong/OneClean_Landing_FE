import React, { useState } from "react";
import * as S from "styles/components/toggleMenu";
import { AnimatePresence, motion } from "framer-motion";

function Toggle(props: any) {
  const [subMenu, setSubMenu] = useState("");
  return (
    <>
      <S.SubMenuTitle
        subMenu={subMenu}
        id={props.id}
        onClick={() => {
          if (subMenu === props.id) {
            setSubMenu("");
          } else {
            setSubMenu(props.id);
          }
        }}
      >
        <div>
          <i className="bi bi-caret-right-fill"></i>
        </div>
        &nbsp; {props.title}
      </S.SubMenuTitle>
      <AnimatePresence>
        {subMenu === props.id && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, transition: { delay: 0.5 } }}
          >
            <S.SubMenuContainer id={props.id} subMenu={subMenu}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <S.SubMenu>
                  <img src={props.url} />
                  {props.content &&
                    props.content.map(({ title, text }: any) => (
                      <>
                        <span>{title}</span>
                        <p>{text}</p>
                        <br />
                      </>
                    ))}
                </S.SubMenu>
              </motion.div>
            </S.SubMenuContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Toggle;
