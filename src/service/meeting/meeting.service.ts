import instance from '../axios-config';

class MeetingService {
  getAllEvents() {
    return instance.get('api/joinme/events');
  }

  getMeetingCategories() {
    return instance.get('api/joinme/categories');
  }
}

export default new MeetingService();
