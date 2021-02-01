import { useAuth } from "@lib/auth";
import { Progress } from "@chakra-ui/react"
import EmptyStateItem from '@components/EmptyStateItem';


const Dashboard = () => {

    const auth = useAuth();

    if (!auth.user) {

        return <Progress size="xs" isIndeterminate />

    }

    return <EmptyStateItem />

};

export default Dashboard
