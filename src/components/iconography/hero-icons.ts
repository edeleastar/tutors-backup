import AcademicCap from "@iconify/icons-heroicons-outline/academic-cap";
import ArrowDown from "@iconify/icons-heroicons-outline/arrow-down";
import ArrowLeft from "@iconify/icons-heroicons-outline/arrow-left";
import ArrowRight from "@iconify/icons-heroicons-outline/arrow-right";
import ArrowsExpand from "@iconify/icons-heroicons-outline/arrows-expand";
import Beaker from "@iconify/icons-heroicons-outline/beaker";
import Bookmark from "@iconify/icons-heroicons-outline/bookmark";
import BookOpen from "@iconify/icons-heroicons-outline/book-open";
import ChatAlt2 from "@iconify/icons-heroicons-outline/chat-alt-2";
import Clock from "@iconify/icons-heroicons-outline/clock";
import Archive from "@iconify/icons-heroicons-outline/archive";
import Collection from "@iconify/icons-heroicons-outline/collection";
import DocumentDuplicate from "@iconify/icons-heroicons-outline/document-duplicate";
import Home from "@iconify/icons-heroicons-outline/home";
import Logout from "@iconify/icons-heroicons-outline/logout";
import Moon from "@iconify/icons-heroicons-outline/moon";
import Play from "@iconify/icons-heroicons-outline/play";
import PresentationChartBar from "@iconify/icons-heroicons-outline/presentation-chart-bar";
import Printer from "@iconify/icons-heroicons-outline/printer";
import Refresh from "@iconify/icons-heroicons-outline/refresh";
import SaveAs from "@iconify/icons-heroicons-outline/save-as";
import Search from "@iconify/icons-heroicons-outline/search";
import MenuAlt2 from "@iconify/icons-heroicons-outline/menu-alt-2";
import SwitchHorizontal from "@iconify/icons-heroicons-outline/switch-horizontal";
import Terminal from "@iconify/icons-heroicons-outline/terminal";
import UserGroup from "@iconify/icons-heroicons-outline/user-group";
import Users from "@iconify/icons-heroicons-outline/users";
import VideoCamera from "@iconify/icons-heroicons-outline/video-camera";
import ViewBoards from "@iconify/icons-heroicons-outline/view-boards";
import DotsHorizontal from "@iconify/icons-heroicons-outline/dots-horizontal";
import DotsVertical from "@iconify/icons-heroicons-outline/dots-vertical";
import { colours } from "./colours";

export const HeroIconLib = {
  // Home Icons
  programHome: { icon: Home, colour: colours.blue["500"] },
  moduleHome: { icon: Home, colour: colours.blue["500"] },

  // companion Icons
  slack: { icon: ChatAlt2, colour: "error" },
  moodle: { icon: AcademicCap, colour: "warning" },
  youtube: { icon: Play, colour: "error" },
  video: { icon: Play, colour: "error" },
  zoom: { icon: VideoCamera, colour: "info" },

  // Lo icons
  course: { icon: BookOpen, colour: "info" },
  topic: { icon: ViewBoards, colour: "info" },
  unit: { icon: Collection, colour: "success" },
  talk: { icon: PresentationChartBar, colour: "info" },

  reference: { icon: DocumentDuplicate, colour: "warning" },
  lab: { icon: Beaker, colour: "success" },
  archive: { icon: Archive, colour: "info" },
  web: { icon: Bookmark, colour: "info" },
  github: { icon: Terminal, colour: "warning" },
  panelvideo: { icon: Play, colour: "error" },

  // pdf reader icons
  left: { icon: ArrowLeft, colour: "success" },
  right: { icon: ArrowRight, colour: "success" },
  print: { icon: Printer, colour: "success" },
  rotate: { icon: Refresh, colour: "success" },
  download: { icon: ArrowDown, colour: "success" },
  fullScreen: { icon: ArrowsExpand, colour: "success" },
  expand: { icon: SwitchHorizontal, colour: "success" },

  // tutors time icons
  tutorsTime: { icon: Clock, colour: "info" },
  timeExport: { icon: SaveAs, colour: "success" },
  live: { icon: Users, colour: "success" },

  // app icons
  search: { icon: Search, colour: "info" },
  tutors: { icon: AcademicCap, colour: "info" },
  logout: { icon: Logout, colour: "error" },
  dark: { icon: Moon, colour: "warning" },
  toc: { icon: MenuAlt2 },

  workshop: { icon: UserGroup },

  compacted: { icon: DotsVertical },
  expanded: { icon: DotsHorizontal },

  default: { icon: DotsVertical }
};
