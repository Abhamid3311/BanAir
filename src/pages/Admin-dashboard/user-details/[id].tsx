import { useGetSingleUsersByIdQuery } from '@/redux/features/users/userApi'
import { useRouter } from 'next/router';

export default function UserDetails() {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetSingleUsersByIdQuery(id);
    console.log(data)
    return (
        <div>
            UserDetails:{id}
        </div>
    )
}
