module.exports =  async ({ github, context }) => {
            // await delay(5000);
            // const labels = context.payload.pull_request.labels.map(label => label.name);
            let issue_number = context.payload.pull_request.number;
            let issueDetails =  await github.issues.get({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number,
               });
            console.log(issueDetails)
            let labels = issueDetails.labels
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
              if (label.name in labelsToAssignees) {
                assignees.push(...labelsToAssignees[label.name]);
              }
            }
            if (assignees.length > 0) {
              await github.issues.addAssignees({
                issue_number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                assignees
              });
            }
            }
