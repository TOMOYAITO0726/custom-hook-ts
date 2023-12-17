import { FC } from "react"
import { UserProfile } from "../types/userProfile";

type Props = {
    user: UserProfile;
};

export const Usercard: FC<Props>= (props) => {
    const { user } = props;
    return (
        <div>
            <dl>
                <dt>名前</dt>
                <dd>{user.name}</dd>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>住所</dt>
                <dd>{user.address}</dd>
            </dl>
        </div>
    )
}