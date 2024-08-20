import { internroutes, jobroutes } from '../apis/apis';
import { apiConnector } from '../utils/Apiconnecter';

const fetchInternships = async () => {
    try {
        console.log(internroutes.GET_INTERNSHIP_API)
        const response = await apiConnector("GET",internroutes.GET_INTERNSHIP_API);
        console.log(response.data);
        setInternships(response.data.data);
    } catch (err) {
        setError('Failed to load internships.');
        console.error('Error fetching internships:', err);
    } finally {
        setLoading(false);
    }
};

const fetchJobs = async () => {
    try {
        console.log(jobroutes.GET_JOB_API)
        const response = await apiConnector("GET",jobroutes.GET_JOB_API);
        console.log(response.data);
        setJobs(response.data.data);
    } catch (err) {
        setError('Failed to load jobs.');
        console.error('Error fetching jobs:', err);
    } finally {
        setLoading(false);
    }
};