import { Col, Container, Row } from "react-bootstrap"
import LevelSelection from "./LevelSelection"
import FlashCard from "./FlashCard"
import { useState } from "react"

const LearningPage = () => {
    const [selectedGrade, setSelectedGrade]= useState(null);

    const handleGradeSelection = (grade) => {
        setSelectedGrade(grade);
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={4} lg={2} className="levelContainer">
                    <LevelSelection gradeSelect={handleGradeSelection}/>
                </Col>
                <Col xs={12} md={8} lg={10} className="d-flex align-items-center justify-content-center">
                    <FlashCard selectedGrade={selectedGrade}/>
                </Col>
            </Row>
        </Container>
    )
}

export default LearningPage