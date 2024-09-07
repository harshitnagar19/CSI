import React from 'react'
import "./KaushalCard.css"
const KaushalCard = ({ prop }) => {
    return (
        <div class="card bg-white pt-10 "

        >
            <div class="card__border"></div>
            <div class="card_title__container">
                <div className='flex justify-between'> <span class="card_title text-xl">Kaushal 6.0 is live now</span>
                    <button className='text-red-600 bg-white px-2 py-1' onClick={() => { prop(false) }}>X</button>
                </div>
                <p class="card_paragraph text-xs">Best way to be success in your life.</p>

            </div>
            <hr class="line" />
            <ul class="card__list">
                <li class="card__list_item">
                    <span class="check">
                        <svg
                            class="check_svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                    <span class="list_text">Programming contest</span>
                </li>
                <li class="card__list_item">
                    <span class="check">
                        <svg
                            class="check_svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                    <span class="list_text">Web dev contest</span>
                </li>
                <li class="card__list_item">
                    <span class="check">
                        <svg
                            class="check_svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                    <span class="list_text">Technica Quiz</span>
                </li>
                <li class="card__list_item">
                    <span class="check">
                        <svg
                            class="check_svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                    <span class="list_text">Research paper present</span>
                </li>
                <li class="card__list_item">
                    <span class="check">
                        <svg
                            class="check_svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                    <span class="list_text">Project Presentation</span>
                </li>
            </ul>
            <button class="button"
            ><a href="https://kaushal-two.vercel.app" target='_blank'>REGISTER NOW</a> </button>
        </div>

    )
}

export default KaushalCard
