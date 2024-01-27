
export default function NewPasswordInput(props: {newPassword:string, setNewPassword: React.Dispatch<React.SetStateAction<string>>}){
    const { newPassword, setNewPassword} = props
    return (
        <input id="new_password_input" name="new_password_input" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="bg-transparent border-b-2 text-white pl-2 pr-2 pb-2 w-full border-secondary outline-none" placeholder="New password !"/>
    )
}