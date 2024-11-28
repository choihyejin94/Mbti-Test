import React, { useEffect, useState } from 'react';
import { getTestResults, deleteTestResult, updateTestResultVisibility } from '../api/testResults';
import Header from '../components/Header';
import { BtnWrapper, ContentStyle, DeleteBtn, LiStyle, PrivateBtn, Wrapper } from '../styles/ResultsStyle';

const TestResultList = () => {
    const [testResults, setTestResults] = useState([]);
    const userData = JSON.parse(localStorage.getItem("user"));
    const { userId } = userData || {}; 

    useEffect(() => {
        const fetchTestResults = async () => {
            const results = await getTestResults();
            setTestResults(results);
        };
        fetchTestResults();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteTestResult(id);
            setTestResults(prevResults => prevResults.filter(result => result.id !== id));
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleVisibilityToggle = async (id, currentVisibility) => {
        const newVisibility = !currentVisibility;
        try {
            await updateTestResultVisibility(id, newVisibility);
            setTestResults(prevResults =>
                prevResults.map(result =>
                    result.id === id ? { ...result, isPrivate: newVisibility } : result
                )
            );
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Header menus={[{
                route: "/profile",
                menu: "Profile",
            },
            {
                route: "/test",
                menu: "Test",
            },
            {
                route: "/results",
                menu: "Results"
            },
            {
                menu: "Logout",
                type: "button",
            },]} />
            <Wrapper>
                <h1 className='text-4xl mb-5'>TEST RESULTS</h1>
                <ul>
                    {testResults.map(result => (
                        <LiStyle key={result.id}>
                            <div>
                                <h2 className='text-3xl text-center m-4'>{result.username} ➡️ {result.mbti}</h2>
                                <p className='text-sm text-end text-neutral-500 mb-2'>Created At: {new Date(result.createdAt).toLocaleString()}</p>
                                <ContentStyle>{result.description}</ContentStyle>
                                <BtnWrapper>
                                    {result.userid === userId && (
                                        <>
                                            <PrivateBtn onClick={() => handleVisibilityToggle(result.id, result.isPrivate)}>{result.isPrivate ? "To convert to public": "To go private"}</PrivateBtn>
                                            <DeleteBtn onClick={() => handleDelete(result.id)}>Delete</DeleteBtn>
                                        </>
                                    )}
                                </BtnWrapper>
                            </div>
                        </LiStyle>
                    ))}
                </ul>
            </Wrapper>
        </>
    );
};

export default TestResultList;
