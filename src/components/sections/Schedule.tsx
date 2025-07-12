"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Filter } from "lucide-react";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("day1");
  const [selectedTrack, setSelectedTrack] = useState("all");

  const days = [
    { id: "day1", label: "Day 1", date: "February 15, 2025" },
    { id: "day2", label: "Day 2", date: "February 16, 2025" },
    { id: "day3", label: "Day 3", date: "February 17, 2025" },
  ];

  const tracks = [
    { id: "all", label: "All Tracks" },
    { id: "research", label: "Research & Development" },
    { id: "regulatory", label: "Regulatory Affairs" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "clinical", label: "Clinical Research" },
    { id: "market", label: "Market Access" },
  ];

  const scheduleData = {
    day1: [
      {
        time: "08:00 - 09:00",
        title: "Registration & Welcome Coffee",
        type: "general",
        track: "general",
        speaker: "",
        location: "Main Lobby",
        attendees: "All Participants",
      },
      {
        time: "09:00 - 09:30",
        title: "Opening Ceremony & Welcome Address",
        type: "keynote",
        track: "general",
        speaker: "Dr. Rajesh Kumar",
        location: "Main Auditorium",
        attendees: "5000+",
      },
      {
        time: "09:30 - 10:30",
        title: "Keynote: Future of Drug Discovery in AI Era",
        type: "keynote",
        track: "research",
        speaker: "Prof. Sarah Chen",
        location: "Main Auditorium",
        attendees: "5000+",
      },
      {
        time: "10:30 - 11:00",
        title: "Networking Break",
        type: "break",
        track: "general",
        speaker: "",
        location: "Exhibition Hall",
        attendees: "All Participants",
      },
      {
        time: "11:00 - 12:30",
        title: "Panel Discussion: Regulatory Harmonization in Asia",
        type: "panel",
        track: "regulatory",
        speaker: "Dr. Michael Thompson & Panel",
        location: "Hall A",
        attendees: "800",
      },
      {
        time: "11:00 - 12:30",
        title: "Workshop: Modern Analytical Techniques",
        type: "workshop",
        track: "research",
        speaker: "Dr. Anita Patel",
        location: "Workshop Room 1",
        attendees: "150",
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch & Exhibition",
        type: "break",
        track: "general",
        speaker: "",
        location: "Exhibition Hall",
        attendees: "All Participants",
      },
      {
        time: "13:30 - 15:00",
        title: "Symposium: Sustainable Manufacturing Practices",
        type: "session",
        track: "manufacturing",
        speaker: "Industry Experts",
        location: "Hall B",
        attendees: "600",
      },
      {
        time: "15:00 - 15:30",
        title: "Coffee Break",
        type: "break",
        track: "general",
        speaker: "",
        location: "Exhibition Hall",
        attendees: "All Participants",
      },
      {
        time: "15:30 - 17:00",
        title: "Clinical Research Updates & Best Practices",
        type: "session",
        track: "clinical",
        speaker: "Prof. James Wilson",
        location: "Hall C",
        attendees: "500",
      },
      {
        time: "17:00 - 18:00",
        title: "Welcome Reception",
        type: "social",
        track: "general",
        speaker: "",
        location: "Terrace Garden",
        attendees: "All Participants",
      },
    ],
    day2: [
      {
        time: "09:00 - 10:00",
        title: "Keynote: Innovation in Biotechnology",
        type: "keynote",
        track: "research",
        speaker: "Dr. Priya Sharma",
        location: "Main Auditorium",
        attendees: "5000+",
      },
      {
        time: "10:00 - 10:30",
        title: "Coffee Break",
        type: "break",
        track: "general",
        speaker: "",
        location: "Exhibition Hall",
        attendees: "All Participants",
      },
      {
        time: "10:30 - 12:00",
        title: "Market Access Strategies for Emerging Markets",
        type: "session",
        track: "market",
        speaker: "Dr. Ravi Menon",
        location: "Hall A",
        attendees: "700",
      },
      {
        time: "12:00 - 13:00",
        title: "Lunch & Poster Session",
        type: "break",
        track: "general",
        speaker: "",
        location: "Exhibition Hall",
        attendees: "All Participants",
      },
      {
        time: "13:00 - 14:30",
        title: "Young Researcher Forum",
        type: "session",
        track: "research",
        speaker: "Emerging Researchers",
        location: "Hall B",
        attendees: "400",
      },
      {
        time: "14:30 - 15:00",
        title: "Coffee Break",
        type: "break",
        track: "general",
        speaker: "",
        location: "Exhibition Hall",
        attendees: "All Participants",
      },
      {
        time: "15:00 - 16:30",
        title: "Awards Ceremony & Recognition",
        type: "awards",
        track: "general",
        speaker: "Award Committee",
        location: "Main Auditorium",
        attendees: "5000+",
      },
      {
        time: "19:00 - 22:00",
        title: "Gala Dinner & Cultural Program",
        type: "social",
        track: "general",
        speaker: "",
        location: "Grand Ballroom",
        attendees: "All Participants",
      },
    ],
    day3: [
      {
        time: "09:00 - 10:30",
        title: "Panel: Future of Pharmaceutical Education",
        type: "panel",
        track: "general",
        speaker: "Academic Leaders Panel",
        location: "Main Auditorium",
        attendees: "5000+",
      },
      {
        time: "10:30 - 11:00",
        title: "Coffee Break",
        type: "break",
        track: "general",
        speaker: "",
        location: "Exhibition Hall",
        attendees: "All Participants",
      },
      {
        time: "11:00 - 12:30",
        title: "Workshop: Digital Health Technologies",
        type: "workshop",
        track: "research",
        speaker: "Tech Innovators",
        location: "Workshop Room 2",
        attendees: "200",
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch Break",
        type: "break",
        track: "general",
        speaker: "",
        location: "Exhibition Hall",
        attendees: "All Participants",
      },
      {
        time: "13:30 - 15:00",
        title: "Closing Keynote: Vision 2030 for Indian Pharma",
        type: "keynote",
        track: "general",
        speaker: "Industry Vision Panel",
        location: "Main Auditorium",
        attendees: "5000+",
      },
      {
        time: "15:00 - 15:30",
        title: "Closing Ceremony & Vote of Thanks",
        type: "general",
        track: "general",
        speaker: "Organizing Committee",
        location: "Main Auditorium",
        attendees: "5000+",
      },
    ],
  };

  const getTypeColor = (type: string) => {
    const colors = {
      keynote:
        "bg-pharmaceutical-100 text-pharmaceutical-800 border-pharmaceutical-200",
      panel: "bg-primary-100 text-primary-800 border-primary-200",
      session: "bg-primary-100 text-primary-800 border-primary-200",
      workshop:
        "bg-pharmaceutical-100 text-pharmaceutical-800 border-pharmaceutical-200",
      break: "bg-gray-100 text-gray-800 border-gray-200",
      social: "bg-primary-100 text-primary-800 border-primary-200",
      awards: "bg-orange-100 text-orange-800 border-orange-200",
      general:
        "bg-pharmaceutical-100 text-pharmaceutical-800 border-pharmaceutical-200",
    };
    return colors[type as keyof typeof colors] || colors.general;
  };

  const filteredSchedule = scheduleData[
    selectedDay as keyof typeof scheduleData
  ].filter(
    (item) =>
      selectedTrack === "all" ||
      item.track === selectedTrack ||
      item.track === "general"
  );

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference
            <span className="block text-pharmaceutical-600">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore our comprehensive 3-day program featuring keynotes, panels,
            workshops, and networking opportunities.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center mb-8">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={`mx-2 mb-4 px-6 py-3 rounded-full font-medium transition-colors ${
                selectedDay === day.id
                  ? "bg-pharmaceutical-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <div className="text-center">
                <div className="font-bold">{day.label}</div>
                <div className="text-sm opacity-75">{day.date}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Track Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filter by Track:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTrack === track.id
                    ? "bg-pharmaceutical-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredSchedule.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3">
                      <div className="flex items-center text-pharmaceutical-600 font-bold text-lg mb-2 sm:mb-0">
                        <Clock className="w-5 h-5 mr-2" />
                        {item.time}
                      </div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                          item.type
                        )}`}
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
                      {item.speaker && (
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-pharmaceutical-500" />
                          <span>
                            <strong>Speaker:</strong> {item.speaker}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-pharmaceutical-500" />
                        <span>
                          <strong>Venue:</strong> {item.location}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-pharmaceutical-500" />
                        <span>
                          <strong>Capacity:</strong> {item.attendees}
                        </span>
                      </div>
                    </div>
                  </div>

                  {item.type !== "break" && item.type !== "social" && (
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button className="bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Schedule */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-8 inline-block">
            <Calendar className="w-12 h-12 text-pharmaceutical-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get the Complete Schedule
            </h3>
            <p className="text-gray-600 mb-6">
              Download the detailed program with session abstracts and speaker
              information.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
              <button className="bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Download PDF Schedule
              </button>
              <button className="border-2 border-pharmaceutical-600 text-pharmaceutical-600 hover:bg-pharmaceutical-600 hover:text-white px-6 py-3 rounded-full font-medium transition-colors">
                Add to Google Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
