import { Col, Container, Row } from "react-bootstrap"
import FlashCard from "./FlashCard"
import { useParams } from "react-router-dom"

const LearningPage = () => {
    const { grade } = useParams();

    return (
        <Container className="learningContainer">
            <Row>
                <Col xs={12} className="d-flex flex-column align-items-center">
                    <FlashCard selectedGrade={grade}/>
                </Col>
            </Row>
        </Container>
    )
}

export default LearningPage