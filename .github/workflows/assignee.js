module.exports =  async ({ github, context }) => {
            await delay(1000);
            const labels = context.payload.pull_request.labels.map(label => label.name);
            console.log("line 30",labels)
            const assignees = [];
            const labelsToAssignees = {
              'product: CLion': ['sgowroji'],
              'product: IntelliJ': ['tilakrayal'],
              'product: GoLand': ['chunduriv'],
              'product: Android Studio': ['sgowroji']
              // Add more label-assignee mappings here
            };
            for (const label of labels) {
              if (label in labelsToAssignees) {
                assignees.push(...labelsToAssignees[label]);
              }
            }
            if (assignees.length > 0) {
              const issue_number = context.payload.pull_request.number;
              await github.issues.addAssignees({
                issue_number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                assignees
              });
            }
            }
