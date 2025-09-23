
import React, { useState } from 'react';
import './feedback.css';

const courseOptions = [
    'Artificial Intelligence',
    'Data Structures',
    'Web Development',
    'Database Management',
    'Machine Learning',
];

const Feedback = () => {
        const [selectedCourse, setSelectedCourse] = useState(courseOptions[0]);
        const [submitted, setSubmitted] = useState(false);

        const handleCourseChange = (e) => setSelectedCourse(e.target.value);
        const handleSubmit = (e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000);
        };

        return (
                <div className="feedback-outer-bg">
                    <div className="feedback-container">
                        <h2>Course Feedback Form</h2>
                        <form className="feedback-form" onSubmit={handleSubmit}>
                                <div className="course-select-block">
                                    <label htmlFor="course" className="course-label">Select Course:</label>
                                    <select id="course" className="course-select" value={selectedCourse} onChange={handleCourseChange}>
                                        {courseOptions.map((course) => (
                                            <option key={course} value={course}>{course}</option>
                                        ))}
                                    </select>
                                </div>
                {/* Question 1 */}
                <div className="question-block">
                <p className="question-text">1. How well did the course content align with the stated objectives for logical reasoning and problem-solving? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q1" value="Strongly Agree" />
                            Strongly Agree
                        </label>
                        <label>
                            <input type="radio" name="q1" value="Agree" />
                            Agree
                        </label>
                        <label>
                            <input type="radio" name="q1" value="Disagree" />
                            Disagree
                        </label>
                        <label>
                            <input type="radio" name="q1" value="Strongly Disagree" />
                            Strongly Disagree
                        </label>
                    </div>
                </div>
                
                {/* Question 2 */}
                <div className="question-block">
                    <p className="question-text">2. Were the prerequisites such as basic programming, data structures, and discrete mathematics sufficient for this course? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q2" value="Very Sufficient" />
                            Very Sufficient
                        </label>
                        <label>
                            <input type="radio" name="q2" value="Sufficient" />
                            Sufficient
                        </label>
                        <label>
                            <input type="radio" name="q2" value="Barely Sufficient" />
                            Barely Sufficient
                        </label>
                        <label>
                            <input type="radio" name="q2" value="Insufficient" />
                            Insufficient
                        </label>
                    </div>
                </div>

                {/* Question 3 */}
                <div className="question-block">
                    <p className="question-text">3. How effective was the course in equipping you with practical skills in logic programming using PROLOG? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q3" value="Very Effective" />
                            Very Effective
                        </label>
                        <label>
                            <input type="radio" name="q3" value="Effective" />
                            Effective
                        </label>
                        <label>
                            <input type="radio" name="q3" value="Ineffective" />
                            Ineffective
                        </label>
                        <label>
                            <input type="radio" name="q3" value="Very Ineffective" />
                            Very Ineffective
                        </label>
                    </div>
                </div>

                {/* Question 4 */}
                <div className="question-block">
                    <p className="question-text">4.Did the course help you apply formal logic systems to represent and reason with knowledge? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q4" value="Greatly" />
                            Greatly
                        </label>
                        <label>
                            <input type="radio" name="q4" value="Somewhat" />
                            Somewhat
                        </label>
                        <label>
                            <input type="radio" name="q4" value="A little" />
                            A little
                        </label>
                        <label>
                            <input type="radio" name="q4" value="Not at all" />
                            Not at all
                        </label>
                    </div>
                </div>
                
                {/* Question 5 */}
                <div className="question-block">
                    <p className="question-text">5.Was the unit on "Limitations of Logic" clear and understandable?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q5" value="Very Clear" />
                            Very Clear
                        </label>
                        <label>
                            <input type="radio" name="q5" value="Clear" />
                            Clear
                        </label>
                        <label>
                            <input type="radio" name="q5" value="Unclear" />
                            Unclear
                        </label>
                        <label>
                            <input type="radio" name="q5" value="Very Unclear" />
                            Very Unclear
                        </label>
                    </div>
                </div>

                {/* Question 6 */}
                <div className="question-block">
                    <p className="question-text">6. How well did the course help you analyze the inherent limitations of classical logic in AI? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q6" value="Very Well" />
                            Very Well
                        </label>
                        <label>
                            <input type="radio" name="q6" value="Well" />
                            Well
                        </label>
                        <label>
                            <input type="radio" name="q6" value="Poorly" />
                            Poorly
                        </label>
                        <label>
                            <input type="radio" name="q6" value="Very Poorly" />
                            Very Poorly
                        </label>
                    </div>
                </div>
                
                {/* Question 7 */}
                <div className="question-block">
                    <p className="question-text">7.Did the practical list help you develop logic programs using PROLOG? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q7" value="Very Much" />
                            Very Much
                        </label>
                        <label>
                            <input type="radio" name="q7" value="Somewhat" />
                            Somewhat
                        </label>
                        <label>
                            <input type="radio" name="q7" value="A little" />
                            A little
                        </label>
                        <label>
                            <input type="radio" name="q7" value="Not at all" />
                            Not at all
                        </label>
                    </div>
                </div>

                {/* Question 8 */}
                <div className="question-block">
                    <p className="question-text">8.How well did the course cover search strategies like Breadth-First and Depth-First Search? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q8" value="Very Thoroughly" />
                            Very Thoroughly
                        </label>
                        <label>
                            <input type="radio" name="q8" value="Thoroughly" />
                            Thoroughly
                        </label>
                        <label>
                            <input type="radio" name="q8" value="Briefly" />
                            Briefly
                        </label>
                        <label>
                            <input type="radio" name="q8" value="Not at all" />
                            Not at all
                        </label>
                    </div>
                </div>

                {/* Question 9 */}
                <div className="question-block">
                    <p className="question-text">9.Were the game-playing algorithms (e.g., Minimax, Alpha-Beta Pruning) well explained?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q9" value="Very Well" />
                            Very Well
                        </label>
                        <label>
                            <input type="radio" name="q9" value="Well" />
                            Well
                        </label>
                        <label>
                            <input type="radio" name="q9" value="Poorly" />
                            Poorly
                        </label>
                        <label>
                            <input type="radio" name="q9" value="Very Poorly" />
                            Very Poorly
                        </label>
                    </div>
                </div>
                
                {/* Question 10 */}
                <div className="question-block">
                    <p className="question-text">10. Did you find the unit on "Search, Games and Problem Solving" practical for solving real-world problems? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q10" value="Very Practical" />
                            Very Practical
                        </label>
                        <label>
                            <input type="radio" name="q10" value="Practical" />
                            Practical
                        </label>
                        <label>
                            <input type="radio" name="q10" value="Impractical" />
                            Impractical
                        </label>
                        <label>
                            <input type="radio" name="q10" value="Very Impractical" />
                            Very Impractical
                        </label>
                    </div>
                </div>

                {/* Question 11 */}
                <div className="question-block">
                    <p className="question-text">11.How useful was the coverage of probabilistic reasoning and Bayesian networks for handling uncertainty?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q11" value="Very Useful" />
                            Very Useful
                        </label>
                        <label>
                            <input type="radio" name="q11" value="Useful" />
                            Useful
                        </label>
                        <label>
                            <input type="radio" name="q11" value="Not Useful" />
                            Not Useful
                        </label>
                        <label>
                            <input type="radio" name="q11" value="Completely Useless" />
                            Completely Useless
                        </label>
                    </div>
                </div>
                
                {/* Question 12 */}
                <div className="question-block">
                    <p className="question-text">12.Did the suggested learning resources, including the textbook, help in understanding the course material?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q12" value="Very Helpful" />
                            Very Helpful
                        </label>
                        <label>
                            <input type="radio" name="q12" value="Helpful" />
                            Helpful
                        </label>
                        <label>
                            <input type="radio" name="q12" value="Not Helpful" />
                            Not Helpful
                        </label>
                        <label>
                            <input type="radio" name="q12" value="Completely Useless" />
                            Completely Useless
                        </label>
                    </div>
                </div>

                {/* Question 13 */}
                <div className="question-block">
                    <p className="question-text">13. Was the balance between theory and practical application appropriate for this course?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q13" value="Perfect Balance" />
                            Perfect Balance
                        </label>
                        <label>
                            <input type="radio" name="q13" value="Good Balance" />
                            Good Balance
                        </label>
                        <label>
                            <input type="radio" name="q13" value="Too Much Theory" />
                            Too Much Theory
                        </label>
                        <label>
                            <input type="radio" name="q13" value="Too Much Practical" />
                            Too Much Practical
                        </label>
                    </div>
                </div>

                {/* Question 14 */}
                <div className="question-block">
                    <p className="question-text">14.How relevant was the course content to your field of study, Master of Computer Applications? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q14" value="Very Relevant" />
                            Very Relevant
                        </label>
                        <label>
                            <input type="radio" name="q14" value="Relevant" />
                            Relevant
                        </label>
                        <label>
                            <input type="radio" name="q14" value="Somewhat Relevant" />
                            Somewhat Relevant
                        </label>
                        <label>
                            <input type="radio" name="q14" value="Not Relevant" />
                            Not Relevant
                        </label>
                    </div>
                </div>
                
                {/* Question 15 */}
                <div className="question-block">
                    <p className="question-text">15.Did the practical work using software like GNU Prolog, SWI-Prolog, or Python help you in implementation? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q15" value="Greatly" />
                            Greatly
                        </label>
                        <label>
                            <input type="radio" name="q15" value="Somewhat" />
                            Somewhat
                        </label>
                        <label>
                            <input type="radio" name="q15" value="A little" />
                            A little
                        </label>
                        <label>
                            <input type="radio" name="q15" value="Not at all" />
                            Not at all
                        </label>
                    </div>
                </div>

                {/* Question 16 */}
                <div className="question-block">
                    <p className="question-text">16.How well did the course content prepare you for future courses or real-world AI problems?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q16" value="Very Well" />
                            Very Well
                        </label>
                        <label>
                            <input type="radio" name="q16" value="Well" />
                            Well
                        </label>
                        <label>
                            <input type="radio" name="q16" value="Poorly" />
                            Poorly
                        </label>
                        <label>
                            <input type="radio" name="q16" value="Very Poorly" />
                            Very Poorly
                        </label>
                    </div>
                </div>

                {/* Question 17 */}
                <div className="question-block">
                    <p className="question-text">17.Were the topics in Unit 1 (Introduction and Logics) covered in sufficient detail? </p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q17" value="Yes, Sufficiently" />
                            Yes, Sufficiently
                        </label>
                        <label>
                            <input type="radio" name="q17" value="Mostly" />
                            Mostly
                        </label>
                        <label>
                            <input type="radio" name="q17" value="No, Too little" />
                            No, Too little
                        </label>
                        <label>
                            <input type="radio" name="q17" value="No, Too much" />
                            No, Too much
                        </label>
                    </div>
                </div>
                
                {/* Question 18 */}
                <div className="question-block">
                    <p className="question-text">18.Did the course provide a good foundation in the basics of Artificial Intelligence?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q18" value="Yes, a strong foundation" />
                            Yes, a strong foundation
                        </label>
                        <label>
                            <input type="radio" name="q18" value="Yes, a good foundation" />
                            Yes, a good foundation
                        </label>
                        <label>
                            <input type="radio" name="q18" value="No, a weak foundation" />
                            No, a weak foundation
                        </label>
                        <label>
                            <input type="radio" name="q18" value="No, not at all" />
                            No, not at all
                        </label>
                    </div>
                </div>

                {/* Question 19 */}
                <div className="question-block">
                    <p className="question-text">19.How much did the practical work on defining family relationships using facts and rules help you understand logic programming?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q19" value="Very Much" />
                            Very Much
                        </label>
                        <label>
                            <input type="radio" name="q19" value="Somewhat" />
                            Somewhat
                        </label>
                        <label>
                            <input type="radio" name="q19" value="A little" />
                            A little
                        </label>
                        <label>
                            <input type="radio" name="q19" value="Not at all" />
                            Not at all
                        </label>
                    </div>
                </div>

                {/* Question 20 */}
                <div className="question-block">
                    <p className="question-text">20. Was the "Flying Penguin" example useful for understanding the limitations of logic and handling uncertainty?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q20" value="Very Useful" />
                            Very Useful
                        </label>
                        <label>
                            <input type="radio" name="q20" value="Useful" />
                            Useful
                        </label>
                        <label>
                            <input type="radio" name="q20" value="Not Useful" />
                            Not Useful
                        </label>
                        <label>
                            <input type="radio" name="q20" value="Completely Useless" />
                            Completely Useless
                        </label>
                    </div>
                </div>
                
                {/* Question 21 */}
                <div className="question-block">
                    <p className="question-text">21.How effective was the practical work on implementing Breadth-First Search and Depth-First Search for pathfinding?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q21" value="Very Effective" />
                            Very Effective
                        </label>
                        <label>
                            <input type="radio" name="q21" value="Effective" />
                            Effective
                        </label>
                        <label>
                            <input type="radio" name="q21" value="Ineffective" />
                            Ineffective
                        </label>
                        <label>
                            <input type="radio" name="q21" value="Very Ineffective" />
                            Very Ineffective
                        </label>
                    </div>
                </div>

                {/* Question 22 */}
                <div className="question-block">
                    <p className="question-text">22.Did the course provide enough detail on "Reasoning with Uncertainty"?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q22" value="Yes, a great deal" />
                            Yes, a great deal
                        </label>
                        <label>
                            <input type="radio" name="q22" value="Yes, enough" />
                            Yes, enough
                        </label>
                        <label>
                            <input type="radio" name="q22" value="No, not enough" />
                            No, not enough
                        </label>
                        <label>
                            <input type="radio" name="q22" value="No, too brief" />
                            No, too brief
                        </label>
                    </div>
                </div>

                {/* Question 23 */}
                <div className="question-block">
                    <p className="question-text">23.How helpful were the practical exercises on building a simple expert system for weather prediction or disease identification?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q23" value="Extremely Helpful" />
                            Extremely Helpful
                        </label>
                        <label>
                            <input type="radio" name="q23" value="Helpful" />
                            Helpful
                        </label>
                        <label>
                            <input type="radio" name="q23" value="Slightly Helpful" />
                            Slightly Helpful
                        </label>
                        <label>
                            <input type="radio" name="q23" value="Not Helpful" />
                            Not Helpful
                        </label>
                    </div>
                </div>

                {/* Question 24 */}
                <div className="question-block">
                    <p className="question-text">24.Were the concepts of Propositional Logic and First-order Predicate Logic presented clearly?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q24" value="Very Clearly" />
                            Very Clearly
                        </label>
                        <label>
                            <input type="radio" name="q24" value="Clearly" />
                            Clearly
                        </label>
                        <label>
                            <input type="radio" name="q24" value="Somewhat Unclearly" />
                            Somewhat Unclearly
                        </label>
                        <label>
                            <input type="radio" name="q24" value="Very Unclearly" />
                            Very Unclearly
                        </label>
                    </div>
                </div>

                {/* Question 25 */}
                <div className="question-block">
                    <p className="question-text">25.Did the course equip you with the skills needed to develop effective AI solutions for real-world problems?</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="q25" value="Strongly Agree" />
                            Strongly Agree
                        </label>
                        <label>
                            <input type="radio" name="q25" value="Agree" />
                            Agree
                        </label>
                        <label>
                            <input type="radio" name="q25" value="Disagree" />
                            Disagree
                        </label>
                        <label>
                            <input type="radio" name="q25" value="Strongly Disagree" />
                            Strongly Disagree
                        </label>
                    </div>
                </div>

                <button type="submit" className="submit-button">Submit Feedback</button>
                {submitted && <div className="feedback-success">Thank you for your feedback!</div>}
            </form>
          </div>
        </div>
    );
};

export default Feedback;