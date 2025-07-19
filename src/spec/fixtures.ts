import { createFakeEvent, createFakeFile, createFakeProject } from "../helpers/fixtureHelperFns"

const fakeFile1Events = [createFakeEvent("received", "2025-01-01T12:42:42Z"), createFakeEvent("uploaded", "2025-01-01T13:42:42Z")]
const fakeFile2Events = [createFakeEvent("received", "2025-01-02T12:42:42Z"), createFakeEvent("uploaded", "2025-01-02T13:42:42Z")]
const fakeFile3Events = [createFakeEvent("received", "2025-01-03T12:42:42Z"), createFakeEvent("uploaded", "2025-01-03T13:42:42Z")]
const fakeFile4Events = [createFakeEvent("received", "2025-01-04T12:42:42Z"), createFakeEvent("uploaded", "2025-01-04T13:42:42Z")]

const fakeProject1Files = [createFakeFile("1", "file-1.tar", "tar", "2048", "uploaded", fakeFile1Events), createFakeFile("2", "file-2.xlsx", "xlsx", "128", "uploaded", fakeFile2Events)]
const fakeProject2Files = [createFakeFile("3", "file-3.tar", "tar", "2048", "uploaded", fakeFile3Events), createFakeFile("4", "file-4.xlsx", "xlsx", "128", "uploaded", fakeFile4Events)]

const fakeProject1Events = [createFakeEvent("new", "2025-01-01T12:42:42Z"), createFakeEvent("ready", "2025-01-01T13:42:42Z")]
const fakeProject2Events = [createFakeEvent("new", "2025-01-03T12:42:42Z"), createFakeEvent("ready", "2025-01-03T13:42:42Z")]

const fakeProject1 = createFakeProject("1", "Project 1", "ready", fakeProject1Files, fakeProject1Events)
const fakeProject2 = createFakeProject("2", "Project 2", "ready", fakeProject2Files, fakeProject2Events)

export const fakeProjects = [fakeProject1, fakeProject2]