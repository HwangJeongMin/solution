import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function Register(props) {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onNameHandler = event => {
        setName(event.currentTarget.value);
    };
    const onEmailHandler = event => {
        setEmail(event.currentTarget.value);
    };
    const onPasswordHandler = event => {
        setPassword(event.currentTarget.value);
    };

    const cancelAddUser = () => {
        props.onShowHandler();
    };
    return (
        <React.Fragment>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all
                        sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        elledby="modal-headline"
                    >
                        <div className="mt-10 sm:mt-0">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="bg-gray-50 px-4 py-3 px-6 flex text-lg font-bold text-indigo-600">
                                    사용자 추가
                                </div>
                                <form action="/#" method="POST">
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6">
                                                    <TextField
                                                        autoComplete="fname"
                                                        name="name"
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="name"
                                                        label="이 름"
                                                        color="secondary"
                                                        autoFocus
                                                        value={Name}
                                                        onChange={onNameHandler}
                                                    />
                                                </div>
                                                <div className="col-span-6">
                                                    <TextField
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="이메일"
                                                        name="email"
                                                        autoComplete="email"
                                                        color="secondary"
                                                        value={Email}
                                                        onChange={
                                                            onEmailHandler
                                                        }
                                                    />
                                                </div>
                                                <div className="col-span-6">
                                                    <TextField
                                                        variant="outlined"
                                                        required
                                                        fullWidth
                                                        name="password"
                                                        label="비밀번호"
                                                        type="password"
                                                        id="password"
                                                        autoComplete="current-password"
                                                        color="secondary"
                                                        value={Password}
                                                        onChange={
                                                            onPasswordHandler
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                                type="button"
                                                onClick={cancelAddUser}
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base
                                            font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto
                                            sm:text-sm"
                                            >
                                                cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Register;
