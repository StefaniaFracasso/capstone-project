import { useState } from "react";
import SidebarMenu, {
  SidebarMenuBody,
  SidebarMenuHeader,
} from "react-bootstrap-sidebar-menu";

const LevelSelection = ({ gradeSelect }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(!clicked);
  };

  const handleGradeClick = (grade) => {
    gradeSelect(grade);
  };
  return (
    <SidebarMenu>
      <SidebarMenuHeader className="mb-4 fw-bold">
        <h2>LEVEL SELECTION</h2>
      </SidebarMenuHeader>
      <SidebarMenuBody>
        <SidebarMenu.Sub>
          <SidebarMenu.Sub.Toggle onClick={handleClick}>
            <SidebarMenu.Nav.Icon>
              {clicked ? (
                <i class="bi bi-caret-down-fill"></i>
              ) : (
                <i className="bi bi-caret-right"></i>
              )}
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>
              Choose your level and start learning!
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Sub.Toggle>
          <SidebarMenu.Sub.Collapse>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon className="me-2 levelIcon">
                  <i class="bi bi-1-circle"></i>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title className="levelName" onClick={() => handleGradeClick(1)}>
                  Novice low level
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon className="me-2 levelIcon">
                  <i class="bi bi-2-circle"></i>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title className="levelName" onClick={() => handleGradeClick(2)}>
                  Novice mid level
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon className="me-2 levelIcon">
                  <i class="bi bi-3-circle"></i>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title className="levelName" onClick={() => handleGradeClick(3)}>
                  Intermediate low level
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon className="me-2 levelIcon">
                  <i class="bi bi-4-circle"></i>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title className="levelName" onClick={() => handleGradeClick(4)}>
                  Intermediate mid level
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon className="me-2 levelIcon">
                  <i class="bi bi-5-circle"></i>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title className="levelName" onClick={() => handleGradeClick(5)}>
                  Advanced level
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
          </SidebarMenu.Sub.Collapse>
        </SidebarMenu.Sub>
      </SidebarMenuBody>
    </SidebarMenu>
  );
};

export default LevelSelection;
