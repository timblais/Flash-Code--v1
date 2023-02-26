import RecallButton from "./buttons/recallButton";

const RecallBtGroup = ({ display, onclick }) => {
    return(
        <section className={`${display || 'flex'} w-full justify-center items-center`}>
            <RecallButton
                key={0}
                type={'button'}
                onClick={onclick}
                name={'Zero'}
                bgColor={'bg-red-500'}
                bgHover={'hover:bg-red-600'}
                width={'w-28'}
            />
            <RecallButton
                key={1}
                type={'button'}
                onClick={onclick}
                name={'Bad'}
                bgColor={'bg-red-400'}
                bgHover={'hover:bg-red-600'}
                width={'w-28'}
            />
            <RecallButton
                key={2}
                type={'button'}
                onClick={onclick}
                name={'Almost'}
                bgColor={'bg-red-300'}
                bgHover={'hover:bg-red-600'}
                width={'w-28'}
            />
            <RecallButton
                key={3}
                type={'button'}
                onClick={onclick}
                name={'Okay'}
                bgColor={'bg-emerald-300'}
                bgHover={'hover:bg-emerald-600'}
                width={'w-28'}
            />
            <RecallButton
                key={4}
                type={'button'}
                onClick={onclick}
                name={'Good'}
                bgColor={'bg-emerald-400'}
                bgHover={'hover:bg-emerald-600'}
                width={'w-28'}
            />
            <RecallButton
                key={5}
                type={'button'}
                onClick={onclick}
                name={'Perfect'}
                bgColor={'bg-emerald-500'}
                bgHover={'hover:bg-emerald-600'}
                width={'w-28'}
            />

        </section>

    )
}

export default RecallBtGroup;