import styled from 'styled-components';

export const StyledBoxDiv = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgba(51, 51, 51, 0.5);
    z-index: 1001;

    .closeModal {
        background-color: transparent;
        padding: 5px;
        border: transparent;
        font-weight: bold;
    }

    dialog {
        width: 100%;
        max-width: 400px;
        padding: 20px;

        border-radius: 10px;

        background-color: var(--grey-50);

        animation: animacaoModal 0.5s;

        .headerModal {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 15px;

            h2 {
                margin-top: 15px;
                font-family: 'Inter', sans-serif;
                font-size: var(--title2);
            }
            .span {
                position: absolute;
                top: 0;
                right: 0;
                background-color: var(--grey-0);
                border: none;

                font-family: 'Inter', sans-serif;
                font-size: var(--text_card);

                cursor: pointer;
                transition: 0.3s;

                :hover {
                    transform: scale(1.3);
                    color: var(--color-primary);
                }
            }
        }

        .formModal {
            display: flex;
            flex-direction: column;
            justify-content: center;

            gap: 12px;

            p {
                font-family: 'Inter', sans-serif;
                font-size: var(--text_card);
                font-weight: 500;
            }

            .error {
                font-size: 1.4rem;
                color: var(--color-secondary);
            }

            span {
                text-align: center;
                font-family: 'Inter', sans-serif;
                font-size: var(--text_card);
                font-weight: 500;
            }

            button {
                padding: 10px 0;
                border: none;
                background-color: var(--color-primary);

                font-family: 'Inter', sans-serif;
                font-size: var(--text1);
                color: var(--grey-0);

                border-radius: 20px;
                transition: 0.3s;
                :hover {
                    background-color: #8236c3;
                }
            }
            .button {
                border: 1px solid var(--color-primary);
                color: var(--color-primary);
                background-color: transparent;
                :hover {
                    color: var(--grey-0);
                    background-color: var(--color-primary);
                }
            }
        }

        @keyframes animacaoModal {
            from {
                transform: translateY(-100px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
`;
