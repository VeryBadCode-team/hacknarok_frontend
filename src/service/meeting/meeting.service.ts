import instance from '../axios-config';

class MeetingService {
  getAllEvents() {
    return instance.get('api/joinme/events');
  }
}

export default new MeetingService();
