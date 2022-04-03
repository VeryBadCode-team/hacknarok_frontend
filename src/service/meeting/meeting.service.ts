import instance from '../axios-config';

class MeetingService {
  getAllEvents() {
    return instance.get('api/joinme/events');
  }

  getEventDetails(id:string) {
    return instance.get(`api/joinme/event/${id}`);
  }

  getMeetingCategories() {
    return instance.get('api/joinme/categories');
  }
}

export default new MeetingService();
