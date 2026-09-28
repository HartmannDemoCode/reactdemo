
export default function StudentsViewer(props) {
  return (
    <>
    <table>
        <thead><tr><th>ID</th><th>Name</th><th>Class room</th></tr></thead>
        <tbody>
            {props.students.map((student)=>{
                return (
                    <tr key={student.id}><td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.classRoom}</td>
                    </tr>
                );
            }
        )}
        </tbody>
    </table>
        
    </>
  )
}
