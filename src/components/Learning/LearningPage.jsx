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
        <Container fluid className="levelContainer">
            <Row className="d-flex justify-content-around h-100">
                <Col xs={12} md={8} lg={10} className="d-flex flex-column align-items-center">
                    <LevelSelection gradeSelect={handleGradeSelection}/>
                    <FlashCard selectedGrade={selectedGrade}/>
                </Col>
            </Row>
        </Container>
    )
}

export default LearningPage